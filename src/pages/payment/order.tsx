import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { apiClient } from "@/api/apiClient";
import { ApiResponse } from "@/api/apiClient";

declare global {
  interface Window {
    goPay: (form: any) => void;
  }
}

interface PaymentInfo {
  orderId: string;
  mid: string;
  moid: string;
  amt: string;
  goodsName: string;
  ediDate: string;
  signData: string;
  payMethod: string;
  returnUrl: string;
}

export default function order() {
  const router = useRouter();
  const { id, name, price, imageUrl, quantity } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const priceNumber = Number(price) || 0;
  const quantityNumber = Number(quantity) || 1;
  const totalAmount = priceNumber * quantityNumber;

  useEffect(() => {
    const script = document.createElement("script");
    // 나이스페이 웹표준 결제 스크립트
    script.src = "https://pg-web.nicepay.co.kr/v3/common/js/nicepay-pgweb.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // 결제창 호출
  const handlePayment = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      // 1. 결제 요청 생성
      const paymentRequestResponse = await apiClient<ApiResponse<any>>({
        method: 'POST',
        url: 'http://localhost:3001/payment/request',
        data: {
          productId: Number(id),
          productName: name as string,
          quantity: quantityNumber,
          totalAmt: totalAmount,
        },
      });

      console.log('데이터 : ', paymentRequestResponse);

      const createdOrderId = paymentRequestResponse.data.orderId;
      setOrderId(createdOrderId);

      // 2. 결제 정보 조회 (EdiDate 포함)
      const paymentInfoResponse = await apiClient<ApiResponse<PaymentInfo>>({
        method: 'GET',
        url: `http://localhost:3001/payment/info/${createdOrderId}`,
      });

      console.log(paymentInfoResponse);
      const paymentInfo = paymentInfoResponse.data;

      if (!paymentInfo?.signData) {
        console.error('결제 정보 응답:', paymentInfoResponse);
        alert('결제 정보(SignData)를 불러오지 못했습니다. 서버 설정(NICEPAY_MERCHANT_KEY, NICEPAY_MID)을 확인해주세요.');
        return;
      }

      // 3. 나이스페이 결제창 호출
      // 나이스페이 결제창은 form을 직접 제출하지 않고, goPay 함수에 전달합니다
      const form = document.createElement("form");
      form.method = "POST";
      form.name = "nicepayForm";

      const addHidden = (name: string, value: string) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value ?? "";
        form.appendChild(input);
      };

      addHidden("PayMethod", paymentInfo.payMethod || "CARD");
      addHidden("GoodsName", paymentInfo.goodsName ?? "");
      addHidden("Amt", paymentInfo.amt ?? "");
      addHidden("MID", paymentInfo.mid ?? "");
      addHidden("Moid", paymentInfo.moid ?? "");
      addHidden("EdiDate", paymentInfo.ediDate ?? "");
      addHidden("SignData", paymentInfo.signData ?? "");
      addHidden("ReturnURL", paymentInfo.returnUrl ?? "");

      document.body.appendChild(form);
      
      // 나이스페이 결제창 호출
      if (window.goPay) {
        window.goPay(form);
      } else {
        alert('나이스페이 결제 스크립트가 로드되지 않았습니다. 페이지를 새로고침해주세요.');
      }
    } catch (error) {
      console.error('결제 요청 실패:', error);
      alert('결제 요청에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div id="success-page" className="min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="max-w-2xl mx-auto px-4 w-full">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  주문 상세 정보
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">총 결제 금액</span>
                  <span className="font-medium text-gray-900">{totalAmount}원</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-medium text-gray-900 mb-3">주문 상품</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img
                          src={imageUrl as string}
                          alt={name as string}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-medium text-gray-900">
                            {name}
                          </p>
                          <p className="text-sm text-gray-500">{quantityNumber}개</p>
                        </div>
                      </div>
                      <span className="font-medium text-gray-900">{totalAmount}원</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="flex-1 bg-secondary text-primary py-3 px-6 rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handlePayment}
                  disabled={isLoading}>
                  {isLoading ? '결제 요청 중...' : '결제하기'}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}