import { apiClient, ApiResponse } from "@/api/apiClient";
import { Product } from "@/types/web/product";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

export default function detail() {
    const [data, setData] = useState<Product | null>(null);
    const router = useRouter();
    const { id } = router.query;
        
    //상품 데이터 불러오기
    const fetchData = async () => {
        try {
            const response = await apiClient<ApiResponse<Product>>({
                method: 'GET',
                url: 'http://localhost:3001/product/detail/' + id,
            });
            setData(response.data); // 서버 응답 데이터를 state에 저장
        } catch (err) {
            console.error('데이터 불러오기 실패:', err);
        }
    };

    useEffect(() => {  
        if (!id) return; // id가 없으면 요청하지 않음
        fetchData();
    }, [id]);

    return (
        <div>
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
                </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                <div className="lg:w-1/2">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                    <img id="mainImage"
                        src={data?.imageUrl}
                        alt={data?.name} className="w-full h-auto object-cover rounded-lg" />
                    <div className="absolute bottom-4 right-4 bg-white bg-opacity-80 rounded-full p-2 cursor-pointer">
                        <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-zoom-in-line"></i>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h1 className="text-3xl font-bold mb-2">{data?.name}</h1>
                    <div className="mb-6">
                        <div className="text-2xl font-bold text-primary mb-1">{data?.price}원</div>
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
                            className="w-12 h-8 text-center border-t border-b border-gray-300 border-none" />
                        <button id="increaseBtn"
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-lg">
                            <i className="ri-add-line"></i>
                        </button>
                        </div>
                    </div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-800 font-medium">총 상품 금액</span>
                        <div className="text-xl font-bold text-primary">{data?.price}</div>
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
                    </div>
                </div>
                <div id="details" className="tab-content py-8">
                    <div className="max-w-3xl mx-auto">
                    <img
                        src={data?.imageUrl}
                        alt={data?.name} className="w-full rounded-lg mb-8" />

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
                    </div>
                    </div>

                    <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                    <img
                        src="https://readdy.ai/api/search-image?query=A%20jar%20of%20homemade%20strawberry%20jam%2C%20with%20visible%20fruit%20pieces%2C%20next%20to%20some%20fresh%20strawberries%2C%20on%20a%20wooden%20table%2C%20bright%20natural%20lighting%2C%20high-resolution&width=300&height=300&seq=10&orientation=squarish"
                        alt="딸기 잼" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h4 className="font-medium mb-1">홈메이드 딸기 잼</h4>
                        <div className="text-primary font-bold mb-2">6,800원</div>
                    </div>
                    </div>

                    <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                    <img
                        src="https://readdy.ai/api/search-image?query=A%20loaf%20of%20whole%20grain%20bread%2C%20with%20visible%20seeds%20and%20grains%2C%20sliced%20to%20show%20texture%2C%20on%20a%20linen%20cloth%2C%20rustic%20kitchen%20setting%2C%20warm%20lighting%2C%20high-resolution&width=300&height=300&seq=11&orientation=squarish"
                        alt="통밀 식빵" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h4 className="font-medium mb-1">통밀 건강 식빵</h4>
                        <div className="text-primary font-bold mb-2">5,200원</div>
                    </div>
                    </div>

                    <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                    <img
                        src="https://readdy.ai/api/search-image?query=A%20block%20of%20premium%20butter%2C%20partially%20unwrapped%2C%20with%20a%20butter%20knife%20nearby%2C%20on%20a%20marble%20surface%2C%20with%20some%20bread%20crumbs%20visible%2C%20soft%20lighting%2C%20high-resolution&width=300&height=300&seq=12&orientation=squarish"
                        alt="프리미엄 버터" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h4 className="font-medium mb-1">프랑스산 발효 버터</h4>
                        <div className="text-primary font-bold mb-2">8,900원</div>
                    </div>
                    </div>
                </div>
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
        </div>
    );
}