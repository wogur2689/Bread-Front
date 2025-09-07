import { apiClient, ApiResponse } from "@/api/apiClient";
import Pagination from "@/components/common/Pagination";
import { Product } from "@/types/web/product";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function success() {
  return (
    <div id="success-page" className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="max-w-2xl mx-auto px-4 w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i className="ri-check-line ri-3x text-green-600"></i>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              결제가 완료되었습니다
            </h1>
            <p className="text-gray-600 mb-8">
              주문해 주셔서 감사합니다. 맛있는 빵을 준비해드리겠습니다.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                주문 상세 정보
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">주문 번호</span>
                  <span className="font-medium text-gray-900">BK-2025-001247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">결제 금액</span>
                  <span className="font-medium text-gray-900">32,500원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">결제 수단</span>
                  <span className="font-medium text-gray-900"
                    >신용카드 (KB국민카드)</span
                  >
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">결제 일시</span>
                  <span className="font-medium text-gray-900"
                    >2025.01.17 14:32</span
                  >
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium text-gray-900 mb-3">주문 상품</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img
                        src="https://readdy.ai/api/search-image?query=fresh%20baked%20croissant%20on%20white%20background%2C%20golden%20brown%2C%20flaky%20pastry%2C%20bakery%20product%20photography%2C%20clean%20minimal%20background&width=60&height=60&seq=croissant1&orientation=squarish"
                        alt="크루아상"
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900">버터 크루아상</p>
                        <p className="text-sm text-gray-500">3,500원 × 2개</p>
                      </div>
                    </div>
                    <span className="font-medium text-gray-900">7,000원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img
                        src="https://readdy.ai/api/search-image?query=chocolate%20muffin%20with%20chocolate%20chips%20on%20white%20background%2C%20bakery%20product%20photography%2C%20moist%20texture%2C%20clean%20minimal%20background&width=60&height=60&seq=muffin1&orientation=squarish"
                        alt="초콜릿 머핀"
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900">초콜릿 머핀</p>
                        <p className="text-sm text-gray-500">4,200원 × 1개</p>
                      </div>
                    </div>
                    <span className="font-medium text-gray-900">4,200원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img
                        src="https://readdy.ai/api/search-image?query=fresh%20baguette%20bread%20on%20white%20background%2C%20golden%20crust%2C%20artisan%20bakery%20bread%2C%20clean%20minimal%20background&width=60&height=60&seq=baguette1&orientation=squarish"
                        alt="바게트"
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900">프랑스 바게트</p>
                        <p className="text-sm text-gray-500">5,800원 × 1개</p>
                      </div>
                    </div>
                    <span className="font-medium text-gray-900">5,800원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img
                        src="https://readdy.ai/api/search-image?query=strawberry%20cream%20cake%20slice%20on%20white%20background%2C%20fresh%20strawberries%2C%20whipped%20cream%2C%20bakery%20dessert%20photography%2C%20clean%20minimal%20background&width=60&height=60&seq=cake1&orientation=squarish"
                        alt="딸기 케이크"
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900">
                          딸기 생크림 케이크
                        </p>
                        <p className="text-sm text-gray-500">15,500원 × 1개</p>
                      </div>
                    </div>
                    <span className="font-medium text-gray-900">15,500원</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="flex-1 bg-primary text-white py-3 px-6 rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap"
              >
                주문 내역 보기
              </button>
              <button
                className="flex-1 bg-secondary text-primary py-3 px-6 rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap"
              >
                쇼핑 계속하기
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}