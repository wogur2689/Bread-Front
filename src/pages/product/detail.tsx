
export default function detail() {
    return (<body>
            <header id="stickyHeader" className="sticky-header fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4 px-6">
                <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">크림 치즈 식빵</h1>
                </div>
                <div className="flex items-center">
                    <span className="text-primary font-bold mr-2">4,800원</span>
                    <button className="bg-primary text-white px-6 py-2 !rounded-button whitespace-nowrap">
                    장바구니 담기
                    </button>
                </div>
                </div>
            </header>
  <div className="container mx-auto px-4 pt-6 pb-24 max-w-6xl">
    <div className="flex justify-between items-center mb-6">
      <button className="flex items-center text-gray-700">
        <div className="w-8 h-8 flex items-center justify-center">
          <i className="ri-arrow-left-s-line ri-lg"></i>
        </div>
        <span>뒤로가기</span>
      </button>
      <div className="flex space-x-4">
        <div className="w-8 h-8 flex items-center justify-center">
          <i className="ri-share-line ri-lg"></i>
        </div>
        <div className="w-8 h-8 flex items-center justify-center">
          <i className="ri-heart-line ri-lg"></i>
        </div>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row gap-8 mb-12">
      <div className="lg:w-1/2">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img id="mainImage"
            src="https://readdy.ai/api/search-image?query=A%20professional%20food%20photography%20of%20a%20cream%20cheese%20bread%20loaf%2C%20soft%20and%20fluffy%20texture%2C%20with%20visible%20cream%20cheese%20swirls%20inside%2C%20on%20a%20wooden%20cutting%20board%2C%20with%20a%20rustic%20bakery%20background%2C%20warm%20lighting%2C%20high-resolution%2C%20appetizing&width=600&height=600&seq=1&orientation=squarish"
            alt="크림 치즈 식빵" className="w-full h-auto object-cover rounded-lg" />
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-80 rounded-full p-2 cursor-pointer">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-zoom-in-line"></i>
            </div>
          </div>
        </div>
        <div className="flex space-x-3 overflow-x-auto py-2">
          <div className="thumbnail-active flex-shrink-0 cursor-pointer rounded-md overflow-hidden"
            data-img="https://readdy.ai/api/search-image?query=A%20professional%20food%20photography%20of%20a%20cream%20cheese%20bread%20loaf%2C%20soft%20and%20fluffy%20texture%2C%20with%20visible%20cream%20cheese%20swirls%20inside%2C%20on%20a%20wooden%20cutting%20board%2C%20with%20a%20rustic%20bakery%20background%2C%20warm%20lighting%2C%20high-resolution%2C%20appetizing&width=600&height=600&seq=1&orientation=squarish">
            <img
              src="https://readdy.ai/api/search-image?query=A%20professional%20food%20photography%20of%20a%20cream%20cheese%20bread%20loaf%2C%20soft%20and%20fluffy%20texture%2C%20with%20visible%20cream%20cheese%20swirls%20inside%2C%20on%20a%20wooden%20cutting%20board%2C%20with%20a%20rustic%20bakery%20background%2C%20warm%20lighting%2C%20high-resolution%2C%20appetizing&width=600&height=600&seq=1&orientation=squarish"
              alt="크림 치즈 식빵 썸네일 1" className="w-20 h-20 object-cover" />
          </div>
          <div className="flex-shrink-0 cursor-pointer rounded-md overflow-hidden"
            data-img="https://readdy.ai/api/search-image?query=A%20close-up%20shot%20of%20cream%20cheese%20bread%20slice%20showing%20the%20texture%20and%20cream%20cheese%20filling%2C%20on%20a%20white%20plate%2C%20with%20a%20cup%20of%20coffee%20nearby%2C%20bright%20natural%20lighting%2C%20high-resolution%2C%20detailed%20bread%20texture&width=600&height=600&seq=2&orientation=squarish">
            <img
              src="https://readdy.ai/api/search-image?query=A%20close-up%20shot%20of%20cream%20cheese%20bread%20slice%20showing%20the%20texture%20and%20cream%20cheese%20filling%2C%20on%20a%20white%20plate%2C%20with%20a%20cup%20of%20coffee%20nearby%2C%20bright%20natural%20lighting%2C%20high-resolution%2C%20detailed%20bread%20texture&width=600&height=600&seq=2&orientation=squarish"
              alt="크림 치즈 식빵 썸네일 2" className="w-20 h-20 object-cover" />
          </div>
          <div className="flex-shrink-0 cursor-pointer rounded-md overflow-hidden"
            data-img="https://readdy.ai/api/search-image?query=A%20cream%20cheese%20bread%20loaf%20being%20sliced%2C%20showing%20the%20cream%20cheese%20filling%20oozing%20out%2C%20on%20a%20wooden%20board%2C%20with%20butter%20knife%2C%20rustic%20kitchen%20setting%2C%20warm%20lighting%2C%20high-resolution%2C%20appetizing&width=600&height=600&seq=3&orientation=squarish">
            <img
              src="https://readdy.ai/api/search-image?query=A%20cream%20cheese%20bread%20loaf%20being%20sliced%2C%20showing%20the%20cream%20cheese%20filling%20oozing%20out%2C%20on%20a%20wooden%20board%2C%20with%20butter%20knife%2C%20rustic%20kitchen%20setting%2C%20warm%20lighting%2C%20high-resolution%2C%20appetizing&width=600&height=600&seq=3&orientation=squarish"
              alt="크림 치즈 식빵 썸네일 3" className="w-20 h-20 object-cover" />
          </div>
          <div className="flex-shrink-0 cursor-pointer rounded-md overflow-hidden"
            data-img="https://readdy.ai/api/search-image?query=A%20packaged%20cream%20cheese%20bread%20in%20a%20bakery%20display%2C%20with%20other%20bread%20varieties%20visible%20in%20the%20background%2C%20clean%20bakery%20environment%2C%20bright%20lighting%2C%20high-resolution%2C%20professional%20bakery%20photography&width=600&height=600&seq=4&orientation=squarish">
            <img
              src="https://readdy.ai/api/search-image?query=A%20packaged%20cream%20cheese%20bread%20in%20a%20bakery%20display%2C%20with%20other%20bread%20varieties%20visible%20in%20the%20background%2C%20clean%20bakery%20environment%2C%20bright%20lighting%2C%20high-resolution%2C%20professional%20bakery%20photography&width=600&height=600&seq=4&orientation=squarish"
              alt="크림 치즈 식빵 썸네일 4" className="w-20 h-20 object-cover" />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-3xl font-bold mb-2">크림 치즈 식빵</h1>

        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
          </div>
          <span className="ml-2 text-gray-600">4.7 (132 리뷰)</span>
        </div>

        <div className="mb-6">
          <div className="text-2xl font-bold text-primary mb-1">4,800원</div>
          <div className="text-sm text-gray-500">적립금: 48원 (1%)</div>
        </div>

        <p className="text-gray-700 mb-6">
          부드러운 식빵 속에 크림치즈가 듬뿍 들어간 프리미엄 식빵입니다. 매일
          아침 신선하게 구워내어 최상의 맛과 식감을 제공합니다. 토스트로 살짝
          구워 드시면 더욱 맛있게 즐기실 수 있습니다.
        </p>

        <div className="border-t border-b border-gray-200 py-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700">수량</span>
            <div className="flex items-center">
              <button id="decreaseBtn"
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-lg">
                <i className="ri-subtract-line"></i>
              </button>
              <input type="number" id="quantity" value="1" min="1"
                className="w-12 h-8 text-center border-t border-b border-gray-300 border-none" readonly />
              <button id="increaseBtn"
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-lg">
                <i className="ri-add-line"></i>
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-700">빵 자르기</span>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded py-2 px-4 pr-8">
                <option>선택 안함</option>
                <option>8등분</option>
                <option>16등분</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-800 font-medium">총 상품 금액</span>
          <div className="text-xl font-bold text-primary">4,800원</div>
        </div>

        <div className="flex space-x-4">
          <button className="w-1/2 border border-primary text-primary py-3 font-medium !rounded-button whitespace-nowrap">
            장바구니 담기
          </button>
          <button className="w-1/2 bg-primary text-white py-3 font-medium !rounded-button whitespace-nowrap">
            바로 구매하기
          </button>
        </div>
      </div>
    </div>

    <div className="mb-12">
      <div className="border-b border-gray-200">
        <div className="flex">
          <button className="tab-btn active py-3 px-6 font-medium text-primary border-b-2 border-primary"
            data-tab="details">
            상세정보
          </button>
          <button className="tab-btn py-3 px-6 font-medium text-gray-500" data-tab="reviews">
            리뷰 (132)
          </button>
          <button className="tab-btn py-3 px-6 font-medium text-gray-500" data-tab="qna">
            문의
          </button>
        </div>
      </div>
      <div id="details" className="tab-content py-8">
        <div className="max-w-3xl mx-auto">
          <img
            src="https://readdy.ai/api/search-image?query=A%20detailed%20image%20showing%20the%20inside%20texture%20of%20cream%20cheese%20bread%2C%20with%20visible%20cream%20cheese%20swirls%2C%20on%20a%20wooden%20background%20with%20some%20ingredients%20like%20flour%2C%20cream%20cheese%20blocks%2C%20and%20butter%20visible%2C%20professional%20food%20photography%2C%20bright%20lighting&width=800&height=500&seq=5&orientation=landscape"
            alt="크림 치즈 식빵 상세" className="w-full rounded-lg mb-8" />

          <h3 className="text-xl font-bold mb-4">제품 설명</h3>
          <p className="text-gray-700 mb-6">
            부드러운 식빵 속에 풍부한 크림치즈가 듬뿍 들어가 있어 한 입 베어
            물면 고소한 치즈의 풍미가 입 안 가득 퍼집니다. 최고급 밀가루와
            신선한 크림치즈만을 사용하여 매일 아침 정성껏 구워내는 프리미엄
            식빵입니다. 토스트로 살짝 구워 드시면 크림치즈가 녹아 더욱 풍부한
            맛을 즐기실 수 있습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-3">원재료 정보</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 밀가루(미국산)</li>
                <li>• 크림치즈(프랑스산)</li>
                <li>• 우유(국내산)</li>
                <li>• 설탕, 버터, 소금, 이스트</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">알레르기 정보</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 밀 함유</li>
                <li>• 우유 함유</li>
                <li>• 계란 함유</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-3">영양 성분 (100g 당)</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 열량: 295kcal</li>
                <li>• 탄수화물: 42g</li>
                <li>• 단백질: 8g</li>
                <li>• 지방: 10g</li>
                <li>• 나트륨: 380mg</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">보관 방법</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 직사광선을 피해 서늘한 곳에 보관하세요.</li>
                <li>• 개봉 후에는 밀봉하여 냉장 보관하세요.</li>
                <li>• 가급적 빠른 시일 내에 섭취하시는 것을 권장합니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="reviews" className="tab-content py-8 hidden">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">고객 리뷰</h3>
            <button className="bg-primary text-white px-4 py-2 !rounded-button whitespace-nowrap">
              리뷰 작성하기
            </button>
          </div>

          <div className="flex items-center mb-6">
            <div className="text-4xl font-bold mr-4">4.7</div>
            <div>
              <div className="flex text-yellow-400 mb-1">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>
              <div className="text-gray-500">132개 리뷰 기준</div>
            </div>
          </div>

          <div className="space-y-1 mb-6">
            <div className="flex items-center">
              <span className="w-16 text-sm text-gray-600">5점</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded-full" style="width: 78%"></div>
              </div>
              <span className="w-12 text-right text-sm text-gray-600">78%</span>
            </div>
            <div className="flex items-center">
              <span className="w-16 text-sm text-gray-600">4점</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded-full" style="width: 15%"></div>
              </div>
              <span className="w-12 text-right text-sm text-gray-600">15%</span>
            </div>
            <div className="flex items-center">
              <span className="w-16 text-sm text-gray-600">3점</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded-full" style="width: 5%"></div>
              </div>
              <span className="w-12 text-right text-sm text-gray-600">5%</span>
            </div>
            <div className="flex items-center">
              <span className="w-16 text-sm text-gray-600">2점</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded-full" style="width: 1%"></div>
              </div>
              <span className="w-12 text-right text-sm text-gray-600">1%</span>
            </div>
            <div className="flex items-center">
              <span className="w-16 text-sm text-gray-600">1점</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded-full" style="width: 1%"></div>
              </div>
              <span className="w-12 text-right text-sm text-gray-600">1%</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <span className="font-medium">김민지</span>
              </div>
              <span className="text-gray-500 text-sm">2025-07-01</span>
            </div>
            <p className="text-gray-700 mb-3">
              크림치즈가 정말 풍부하게 들어있어서 좋아요! 아침에 토스트해서
              먹으면 치즈가 살짝 녹아서 더 맛있어요. 단맛이 적당해서 버터
              없이도 충분히 맛있게 먹을 수 있어요. 다음에도 꼭 구매할
              예정입니다.
            </p>
            <div className="flex space-x-2">
              <img
                src="https://readdy.ai/api/search-image?query=A%20slice%20of%20cream%20cheese%20bread%20on%20a%20plate%20with%20a%20bite%20taken%20out%2C%20showing%20the%20cream%20cheese%20filling%2C%20with%20a%20cup%20of%20coffee%20nearby%2C%20morning%20breakfast%20setting%2C%20natural%20lighting&width=120&height=120&seq=6&orientation=squarish"
                alt="리뷰 이미지" className="w-20 h-20 object-cover rounded" />
              <img
                src="https://readdy.ai/api/search-image?query=A%20toasted%20slice%20of%20cream%20cheese%20bread%20with%20melted%20cheese%20visible%2C%20on%20a%20wooden%20board%2C%20with%20a%20knife%20and%20some%20butter%2C%20breakfast%20setting%2C%20warm%20lighting&width=120&height=120&seq=7&orientation=squarish"
                alt="리뷰 이미지" className="w-20 h-20 object-cover rounded" />
            </div>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <span className="font-medium">박준호</span>
              </div>
              <span className="text-gray-500 text-sm">2025-06-28</span>
            </div>
            <p className="text-gray-700">
              빵 자체는 정말 부드럽고 맛있어요. 크림치즈 양이 조금 더 많았으면
              좋겠다는 생각이 들었지만 전체적으로 만족합니다. 가족들 모두
              좋아해서 자주 구매하게 될 것 같아요.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <span className="font-medium">이서연</span>
              </div>
              <span className="text-gray-500 text-sm">2025-06-25</span>
            </div>
            <p className="text-gray-700 mb-3">
              여러 베이커리에서 크림치즈 식빵을 사봤는데 여기가 제일 맛있어요!
              크림치즈 맛이 진하고 빵도 정말 부드러워요. 배송도 빠르고 포장도
              깔끔해서 좋았습니다. 다음에는 다른 종류의 빵도 시도해볼
              예정이에요.
            </p>
            <div className="flex">
              <img
                src="https://readdy.ai/api/search-image?query=A%20cream%20cheese%20bread%20loaf%20with%20a%20few%20slices%20cut%2C%20showing%20the%20cream%20cheese%20swirls%20inside%2C%20on%20a%20wooden%20serving%20board%2C%20with%20a%20cup%20of%20tea%20nearby%2C%20cozy%20home%20setting&width=120&height=120&seq=8&orientation=squarish"
                alt="리뷰 이미지" className="w-20 h-20 object-cover rounded" />
            </div>
          </div>

          <div className="text-center">
            <button className="text-primary font-medium">
              더 많은 리뷰 보기
            </button>
          </div>
        </div>
      </div>

      <div id="qna" className="tab-content py-8 hidden">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">상품 문의</h3>
          <button className="bg-primary text-white px-4 py-2 !rounded-button whitespace-nowrap">
            문의하기
          </button>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between bg-gray-50 px-6 py-4 cursor-pointer qna-toggle">
              <div className="flex items-center">
                <span className="bg-primary text-white text-xs px-2 py-1 rounded mr-3">답변완료</span>
                <span className="font-medium">유통기한은 얼마나 되나요?</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 text-sm mr-4">최윤서 | 2025-07-02</span>
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-arrow-down-s-line qna-arrow"></i>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 hidden qna-content">
              <div className="flex mb-4">
                <span className="text-gray-500 font-medium mr-2">Q.</span>
                <p className="text-gray-700">
                  안녕하세요. 크림치즈 식빵의 유통기한이 궁금합니다. 냉장 보관
                  시와 실온 보관 시 각각 얼마나 되나요?
                </p>
              </div>
              <div className="flex bg-gray-50 p-4 rounded">
                <span className="text-primary font-medium mr-2">A.</span>
                <p className="text-gray-700">
                  안녕하세요, 고객님. 저희 크림치즈 식빵은 방부제를 사용하지
                  않아 실온 보관 시 제조일로부터 3일, 냉장 보관 시 5일 이내
                  섭취를 권장드립니다. 개봉 후에는 반드시 밀봉하여 냉장 보관해
                  주시고, 가급적 빨리 드시는 것이 좋습니다. 추가 문의사항이
                  있으시면 언제든지 문의해 주세요. 감사합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between bg-gray-50 px-6 py-4 cursor-pointer qna-toggle">
              <div className="flex items-center">
                <span className="bg-primary text-white text-xs px-2 py-1 rounded mr-3">답변완료</span>
                <span className="font-medium">빵 자르기 옵션은 어떻게 되나요?</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 text-sm mr-4">정도윤 | 2025-06-30</span>
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-arrow-down-s-line qna-arrow"></i>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 hidden qna-content">
              <div className="flex mb-4">
                <span className="text-gray-500 font-medium mr-2">Q.</span>
                <p className="text-gray-700">
                  빵 자르기 옵션에서 8등분과 16등분의 차이가 어떻게 되나요?
                  두께가 어느 정도인지 알 수 있을까요?
                </p>
              </div>
              <div className="flex bg-gray-50 p-4 rounded">
                <span className="text-primary font-medium mr-2">A.</span>
                <p className="text-gray-700">
                  안녕하세요, 고객님. 8등분은 약 2.5cm 두께로, 토스트용으로
                  적합합니다. 16등분은 약 1.2cm 두께로, 샌드위치나 가볍게
                  드시기 좋은 두께입니다. 원하시는 용도에 맞게 선택해 주시면
                  됩니다. 감사합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between bg-gray-50 px-6 py-4 cursor-pointer qna-toggle">
              <div className="flex items-center">
                <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded mr-3">답변대기</span>
                <span className="font-medium">알레르기 정보가 더 자세히 알고 싶어요</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 text-sm mr-4">송지현 | 2025-07-05</span>
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-arrow-down-s-line qna-arrow"></i>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 hidden qna-content">
              <div className="flex">
                <span className="text-gray-500 font-medium mr-2">Q.</span>
                <p className="text-gray-700">
                  아이가 견과류 알레르기가 있는데, 이 빵에는 견과류가
                  들어있거나 견과류와 같은 시설에서 제조되나요? 자세한
                  알레르기 정보를 알려주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-6">함께 구매하면 좋은 상품</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
          <img
            src="https://readdy.ai/api/search-image?query=A%20chocolate%20chip%20bread%20loaf%2C%20freshly%20baked%2C%20with%20visible%20chocolate%20chunks%2C%20on%20a%20wooden%20surface%2C%20with%20some%20chocolate%20pieces%20nearby%2C%20warm%20bakery%20lighting%2C%20high-resolution&width=300&height=300&seq=9&orientation=squarish"
            alt="초코칩 식빵" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="font-medium mb-1">초코칩 식빵</h4>
            <div className="text-primary font-bold mb-2">4,500원</div>
            <div className="flex text-yellow-400 text-sm">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
              <span className="text-gray-500 ml-1">(98)</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
          <img
            src="https://readdy.ai/api/search-image?query=A%20jar%20of%20homemade%20strawberry%20jam%2C%20with%20visible%20fruit%20pieces%2C%20next%20to%20some%20fresh%20strawberries%2C%20on%20a%20wooden%20table%2C%20bright%20natural%20lighting%2C%20high-resolution&width=300&height=300&seq=10&orientation=squarish"
            alt="딸기 잼" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="font-medium mb-1">홈메이드 딸기 잼</h4>
            <div className="text-primary font-bold mb-2">6,800원</div>
            <div className="flex text-yellow-400 text-sm">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <span className="text-gray-500 ml-1">(156)</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
          <img
            src="https://readdy.ai/api/search-image?query=A%20loaf%20of%20whole%20grain%20bread%2C%20with%20visible%20seeds%20and%20grains%2C%20sliced%20to%20show%20texture%2C%20on%20a%20linen%20cloth%2C%20rustic%20kitchen%20setting%2C%20warm%20lighting%2C%20high-resolution&width=300&height=300&seq=11&orientation=squarish"
            alt="통밀 식빵" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="font-medium mb-1">통밀 건강 식빵</h4>
            <div className="text-primary font-bold mb-2">5,200원</div>
            <div className="flex text-yellow-400 text-sm">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-line"></i>
              <span className="text-gray-500 ml-1">(87)</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
          <img
            src="https://readdy.ai/api/search-image?query=A%20block%20of%20premium%20butter%2C%20partially%20unwrapped%2C%20with%20a%20butter%20knife%20nearby%2C%20on%20a%20marble%20surface%2C%20with%20some%20bread%20crumbs%20visible%2C%20soft%20lighting%2C%20high-resolution&width=300&height=300&seq=12&orientation=squarish"
            alt="프리미엄 버터" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h4 className="font-medium mb-1">프랑스산 발효 버터</h4>
            <div className="text-primary font-bold mb-2">8,900원</div>
            <div className="flex text-yellow-400 text-sm">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
              <span className="text-gray-500 ml-1">(124)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 lg:hidden">
    <div className="flex space-x-4">
      <button className="w-1/2 border border-primary text-primary py-3 font-medium !rounded-button whitespace-nowrap">
        장바구니 담기
      </button>
      <button className="w-1/2 bg-primary text-white py-3 font-medium !rounded-button whitespace-nowrap">
        바로 구매하기
      </button>
    </div>
  </div>

  <div id="imageModal" className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center hidden">
    <div className="relative w-full max-w-4xl">
      <button id="closeModal" className="absolute top-4 right-4 text-white">
        <div className="w-8 h-8 flex items-center justify-center">
          <i className="ri-close-line ri-2x"></i>
        </div>
      </button>
      <img id="modalImage" src="" alt="확대된 이미지" className="max-w-full max-h-[80vh] mx-auto" />
    </div>
  </div>
  </body>
    );
}