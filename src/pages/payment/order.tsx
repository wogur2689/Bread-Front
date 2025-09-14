import { apiClient, ApiResponse } from "@/api/apiClient";
import Pagination from "@/components/common/Pagination";
import { Product } from "@/types/web/product";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Order } from "@/types/web/order";
import { useRouter } from "next/router";

export default function order() {
  const router = useRouter();
  const { name, price, imageUrl, quantity } = router.query;

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
                    <span className="font-medium text-gray-900">2025001247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">결제 금액</span>
                    <span className="font-medium text-gray-900">{Number(price)}원</span>
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
                          <p className="text-sm text-gray-500">{Number(quantity)}개</p>
                        </div>
                      </div>
                      <span className="font-medium text-gray-900">{Number(price)}원</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-secondary text-primary py-3 px-6 rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap">
                  결제하기
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}