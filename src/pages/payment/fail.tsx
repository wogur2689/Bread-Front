import { apiClient, ApiResponse } from "@/api/apiClient";
import Pagination from "@/components/common/Pagination";
import { Product } from "@/types/web/product";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function fail() {
  return (
    <div id="failure-page" className="min-h-screen flex flex-col hidden">
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="max-w-2xl mx-auto px-4 w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div
              className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i className="ri-close-line ri-3x text-red-600"></i>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              결제에 실패했습니다
            </h1>
            <p className="text-gray-600 mb-8">
              결제 처리 중 문제가 발생했습니다. 다시 시도해 주세요.
            </p>

            <div
              className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 text-left"
            >
              <h2
                className="text-lg font-semibold text-red-800 mb-3 flex items-center"
              >
                <i className="ri-error-warning-line ri-lg mr-2"></i>
                실패 사유
              </h2>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-red-700 font-medium">
                  카드 승인이 거절되었습니다
                </p>
                <p className="text-sm text-red-600 mt-1">오류 코드: PAY_ERR_4001</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-red-800">문제 해결 방법</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li className="flex items-start">
                    <i
                      className="ri-arrow-right-s-line ri-sm mt-0.5 mr-1 flex-shrink-0"
                    ></i>
                    <span>카드 정보를 다시 확인해 주세요</span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="ri-arrow-right-s-line ri-sm mt-0.5 mr-1 flex-shrink-0"
                    ></i>
                    <span>카드 한도 및 잔액을 확인해 주세요</span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="ri-arrow-right-s-line ri-sm mt-0.5 mr-1 flex-shrink-0"
                    ></i>
                    <span>다른 결제 수단을 이용해 보세요</span>
                  </li>
                  <li className="flex items-start">
                    <i
                      className="ri-arrow-right-s-line ri-sm mt-0.5 mr-1 flex-shrink-0"
                    ></i>
                    <span
                      >카드사에 문의하여 결제 제한 여부를 확인해 주세요</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                className="flex-1 bg-primary text-white py-3 px-6 rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap"
              >
                다시 시도하기
              </button>
              <button
                className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap"
              >
                이전 페이지로
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <i className="ri-customer-service-line ri-lg mr-2"></i>
                고객센터 연락처
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <i className="ri-phone-line ri-sm mr-2"></i>
                  <span>전화: 1588-1234 (평일 09:00~18:00)</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-mail-line ri-sm mr-2"></i>
                  <span>이메일: support@bakery.co.kr</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-chat-1-line ri-sm mr-2"></i>
                  <span>카카오톡: @베이커리고객센터</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
