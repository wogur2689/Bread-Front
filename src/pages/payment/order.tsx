import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

declare global {
  interface Window {
    goPay: (form: any) => void;
  }
}

export default function order() {
  const router = useRouter();
  const { id, name, price, imageUrl, quantity } = router.query;

  const priceNumber = Number(price) || 0;
  const quantityNumber = Number(quantity) || 1;
  const totalAmount = priceNumber * quantityNumber;

  const moid = useMemo(
    () => `${id ?? "temp"}-${Date.now()}`,
    [id]
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://web.nicepay.co.kr/v3/webstd/js/nicepay-3.0.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // 결제창 호출
  const handlePayment = () => {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "/api/payment/request"; // Next.js API → Nest.js proxy 가능

    // 주문정보 hidden input
    form.innerHTML = `
      <input type="hidden" name="GoodsName" value="${name ?? ""}" />
      <input type="hidden" name="Amt" value="${totalAmount}" />
      <input type="hidden" name="MID" value="YOUR_MID_HERE" />
      <input type="hidden" name="Moid" value="${moid}" />
      <input type="hidden" name="ReturnURL" value="http://localhost:3000/payment/success" />
    `;

    document.body.appendChild(form);
    window.goPay(form);
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
                    <span className="text-gray-600">주문 번호</span>
                  <span className="font-medium text-gray-900">{moid}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">결제 금액</span>
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
                <button className="flex-1 bg-secondary text-primary py-3 px-6 rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap"
                  onClick={handlePayment}>
                  결제하기
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}