<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>결제 완료 - 베이커리</title>
    <script src="https://cdn.tailwindcss.com/3.4.16"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      rel="stylesheet"
    /> 
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css"
      rel="stylesheet"
    />
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              primary: "#8B4513",
              secondary: "#D2B48C",
            },
            borderRadius: {
              none: "0px",
              sm: "4px",
              DEFAULT: "8px",
              md: "12px",
              lg: "16px",
              xl: "20px",
              "2xl": "24px",
              "3xl": "32px",
              full: "9999px",
              button: "8px",
            },
          },
        },
      };
    </script>
    <style>
      :where([class^="ri-"])::before {
          content: "\f3c2";
      }
    </style>
  </head>
  <body class="bg-gray-50 min-h-screen">
    <div id="success-page" class="min-h-screen flex flex-col">
      <header class="bg-white shadow-sm">
        <div
          class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center"
        >
          <div class="font-['Pacifico'] text-2xl text-primary">logo</div>
          <nav class="hidden md:flex space-x-8">
            <a
              href="#"
              class="text-gray-700 hover:text-primary transition-colors"
              >메뉴</a
            >
            <a
              href="#"
              class="text-gray-700 hover:text-primary transition-colors"
              >매장 안내</a
            >
            <a
              href="#"
              class="text-gray-700 hover:text-primary transition-colors"
              >이벤트</a
            >
            <a
              href="#"
              class="text-gray-700 hover:text-primary transition-colors"
              >고객센터</a
            >
          </nav>
          <div class="flex items-center space-x-4">
            <button
              class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary"
            >
              <i class="ri-shopping-cart-line ri-lg"></i>
            </button>
            <button
              class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary"
            >
              <i class="ri-user-line ri-lg"></i>
            </button>
          </div>
        </div>
      </header>

      <main class="flex-1 flex items-center justify-center py-16">
        <div class="max-w-2xl mx-auto px-4 w-full">
          <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div
              class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i class="ri-check-line ri-3x text-green-600"></i>
            </div>

            <h1 class="text-3xl font-bold text-gray-900 mb-2">
              결제가 완료되었습니다
            </h1>
            <p class="text-gray-600 mb-8">
              주문해 주셔서 감사합니다. 맛있는 빵을 준비해드리겠습니다.
            </p>

            <div class="bg-gray-50 rounded-xl p-6 mb-8 text-left">
              <h2 class="text-lg font-semibold text-gray-900 mb-4">
                주문 상세 정보
              </h2>

              <div class="space-y-3 mb-6">
                <div class="flex justify-between">
                  <span class="text-gray-600">주문 번호</span>
                  <span class="font-medium text-gray-900">BK-2025-001247</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">결제 금액</span>
                  <span class="font-medium text-gray-900">32,500원</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">결제 수단</span>
                  <span class="font-medium text-gray-900"
                    >신용카드 (KB국민카드)</span
                  >
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">결제 일시</span>
                  <span class="font-medium text-gray-900"
                    >2025.01.17 14:32</span
                  >
                </div>
              </div>

              <div class="border-t pt-4">
                <h3 class="font-medium text-gray-900 mb-3">주문 상품</h3>
                <div class="space-y-2">
                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-3">
                      <img
                        src="https://readdy.ai/api/search-image?query=fresh%20baked%20croissant%20on%20white%20background%2C%20golden%20brown%2C%20flaky%20pastry%2C%20bakery%20product%20photography%2C%20clean%20minimal%20background&width=60&height=60&seq=croissant1&orientation=squarish"
                        alt="크루아상"
                        class="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p class="font-medium text-gray-900">버터 크루아상</p>
                        <p class="text-sm text-gray-500">3,500원 × 2개</p>
                      </div>
                    </div>
                    <span class="font-medium text-gray-900">7,000원</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-3">
                      <img
                        src="https://readdy.ai/api/search-image?query=chocolate%20muffin%20with%20chocolate%20chips%20on%20white%20background%2C%20bakery%20product%20photography%2C%20moist%20texture%2C%20clean%20minimal%20background&width=60&height=60&seq=muffin1&orientation=squarish"
                        alt="초콜릿 머핀"
                        class="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p class="font-medium text-gray-900">초콜릿 머핀</p>
                        <p class="text-sm text-gray-500">4,200원 × 1개</p>
                      </div>
                    </div>
                    <span class="font-medium text-gray-900">4,200원</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-3">
                      <img
                        src="https://readdy.ai/api/search-image?query=fresh%20baguette%20bread%20on%20white%20background%2C%20golden%20crust%2C%20artisan%20bakery%20bread%2C%20clean%20minimal%20background&width=60&height=60&seq=baguette1&orientation=squarish"
                        alt="바게트"
                        class="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p class="font-medium text-gray-900">프랑스 바게트</p>
                        <p class="text-sm text-gray-500">5,800원 × 1개</p>
                      </div>
                    </div>
                    <span class="font-medium text-gray-900">5,800원</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-3">
                      <img
                        src="https://readdy.ai/api/search-image?query=strawberry%20cream%20cake%20slice%20on%20white%20background%2C%20fresh%20strawberries%2C%20whipped%20cream%2C%20bakery%20dessert%20photography%2C%20clean%20minimal%20background&width=60&height=60&seq=cake1&orientation=squarish"
                        alt="딸기 케이크"
                        class="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p class="font-medium text-gray-900">
                          딸기 생크림 케이크
                        </p>
                        <p class="text-sm text-gray-500">15,500원 × 1개</p>
                      </div>
                    </div>
                    <span class="font-medium text-gray-900">15,500원</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <button
                class="flex-1 bg-primary text-white py-3 px-6 rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap"
              >
                주문 내역 보기
              </button>
              <button
                class="flex-1 bg-secondary text-primary py-3 px-6 rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap"
              >
                쇼핑 계속하기
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>

    <div id="failure-page" class="min-h-screen flex flex-col hidden">
      <header class="bg-white shadow-sm">
        <div
          class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center"
        >
          <div class="font-['Pacifico'] text-2xl text-primary">logo</div>
          <nav class="hidden md:flex space-x-8">
            <a
              href="#"
              class="text-gray-700 hover:text-primary transition-colors"
              >메뉴</a
            >
            <a
              href="#"
              class="text-gray-700 hover:text-primary transition-colors"
              >매장 안내</a
            >
            <a
              href="#"
              class="text-gray-700 hover:text-primary transition-colors"
              >이벤트</a
            >
            <a
              href="#"
              class="text-gray-700 hover:text-primary transition-colors"
              >고객센터</a
            >
          </nav>
          <div class="flex items-center space-x-4">
            <button
              class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary"
            >
              <i class="ri-shopping-cart-line ri-lg"></i>
            </button>
            <button
              class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary"
            >
              <i class="ri-user-line ri-lg"></i>
            </button>
          </div>
        </div>
      </header>

      <main class="flex-1 flex items-center justify-center py-16">
        <div class="max-w-2xl mx-auto px-4 w-full">
          <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div
              class="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i class="ri-close-line ri-3x text-red-600"></i>
            </div>

            <h1 class="text-3xl font-bold text-gray-900 mb-2">
              결제에 실패했습니다
            </h1>
            <p class="text-gray-600 mb-8">
              결제 처리 중 문제가 발생했습니다. 다시 시도해 주세요.
            </p>

            <div
              class="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 text-left"
            >
              <h2
                class="text-lg font-semibold text-red-800 mb-3 flex items-center"
              >
                <i class="ri-error-warning-line ri-lg mr-2"></i>
                실패 사유
              </h2>
              <div class="bg-white rounded-lg p-4 mb-4">
                <p class="text-red-700 font-medium">
                  카드 승인이 거절되었습니다
                </p>
                <p class="text-sm text-red-600 mt-1">오류 코드: PAY_ERR_4001</p>
              </div>

              <div class="space-y-3">
                <h3 class="font-medium text-red-800">문제 해결 방법</h3>
                <ul class="space-y-2 text-sm text-red-700">
                  <li class="flex items-start">
                    <i
                      class="ri-arrow-right-s-line ri-sm mt-0.5 mr-1 flex-shrink-0"
                    ></i>
                    <span>카드 정보를 다시 확인해 주세요</span>
                  </li>
                  <li class="flex items-start">
                    <i
                      class="ri-arrow-right-s-line ri-sm mt-0.5 mr-1 flex-shrink-0"
                    ></i>
                    <span>카드 한도 및 잔액을 확인해 주세요</span>
                  </li>
                  <li class="flex items-start">
                    <i
                      class="ri-arrow-right-s-line ri-sm mt-0.5 mr-1 flex-shrink-0"
                    ></i>
                    <span>다른 결제 수단을 이용해 보세요</span>
                  </li>
                  <li class="flex items-start">
                    <i
                      class="ri-arrow-right-s-line ri-sm mt-0.5 mr-1 flex-shrink-0"
                    ></i>
                    <span
                      >카드사에 문의하여 결제 제한 여부를 확인해 주세요</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                class="flex-1 bg-primary text-white py-3 px-6 rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap"
              >
                다시 시도하기
              </button>
              <button
                class="flex-1 bg-gray-500 text-white py-3 px-6 rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap"
              >
                이전 페이지로
              </button>
            </div>

            <div class="bg-gray-50 rounded-xl p-6 text-left">
              <h3 class="font-semibold text-gray-900 mb-3 flex items-center">
                <i class="ri-customer-service-line ri-lg mr-2"></i>
                고객센터 연락처
              </h3>
              <div class="space-y-2 text-sm text-gray-600">
                <div class="flex items-center">
                  <i class="ri-phone-line ri-sm mr-2"></i>
                  <span>전화: 1588-1234 (평일 09:00~18:00)</span>
                </div>
                <div class="flex items-center">
                  <i class="ri-mail-line ri-sm mr-2"></i>
                  <span>이메일: support@bakery.co.kr</span>
                </div>
                <div class="flex items-center">
                  <i class="ri-chat-1-line ri-sm mr-2"></i>
                  <span>카카오톡: @베이커리고객센터</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <script id="page-switcher">
      document.addEventListener("DOMContentLoaded", function () {
        const successPage = document.getElementById("success-page");
        const failurePage = document.getElementById("failure-page");

        function showSuccessPage() {
          successPage.classList.remove("hidden");
          failurePage.classList.add("hidden");
        }

        function showFailurePage() {
          successPage.classList.add("hidden");
          failurePage.classList.remove("hidden");
        }

        window.showSuccessPage = showSuccessPage;
        window.showFailurePage = showFailurePage;
      });
    </script>

    <script id="button-handlers">
      document.addEventListener("DOMContentLoaded", function () {
        const retryButtons = document.querySelectorAll("button");

        retryButtons.forEach((button) => {
          if (button.textContent.includes("다시 시도하기")) {
            button.addEventListener("click", function () {
              window.history.back();
            });
          }

          if (button.textContent.includes("이전 페이지로")) {
            button.addEventListener("click", function () {
              window.history.back();
            });
          }

          if (button.textContent.includes("주문 내역 보기")) { 
            button.addEventListener("click", function () {
              alert("주문 내역 페이지로 이동합니다.");
            });
          }

          if (button.textContent.includes("쇼핑 계속하기")) {
            button.addEventListener("click", function () {
              window.location.href = "/";
            });
          }
        });
      });
    </script>
  </body>
</html>
