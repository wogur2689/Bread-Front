import { apiClient, ApiResponse } from "@/api/apiClient";
import Pagination from "@/components/common/Pagination";
import { Product } from "@/types/web/product";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Order } from "@/types/web/order";

export default function order() {
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
                    <span className="font-medium text-gray-900">BK-2025-001247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">결제 금액</span>
                    <span className="font-medium text-gray-900">5,000원</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-medium text-gray-900 mb-3">주문 상품</h3>
                  <div className="space-y-2">
                    {/* <div className="flex justify-between items-center">
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
                    </div> */}
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