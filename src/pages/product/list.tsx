export default function list() {
    return (
        <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-8">
                <div className="flex space-x-4">
                    <select className="border border-gray-300 rounded-button py-2 px-4 focus:outline-none focus:ring-1 focus:ring-custom focus:border-custom">
                        <option>전체 카테고리</option>
                        <option>식빵</option>
                        <option>베이글</option>
                        <option>페이스트리</option>
                    </select>
                </div>
                <div className="flex space-x-4">
                    <select className="border border-gray-300 rounded-button py-2 px-4 focus:outline-none focus:ring-1 focus:ring-custom focus:border-custom">
                        <option>최신순</option>
                        <option>인기순</option>
                        <option>낮은가격순</option>
                        <option>높은가격순</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img src="https://creatie.ai/ai/api/search-image?query=A professional food photography of a fresh classNameic croissant on a light gray background, showing flaky layers and golden brown color&width=400&height=400&orientation=squarish&flag=d4bfeb52-40f1-46b5-902f-fb8eb21e7226" className="w-full h-64 object-cover object-center" alt="상품 이미지"/>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">클래식 크루아상</h3>
                        <p className="mt-2 text-xl font-bold text-custom">4,500원</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img src="https://creatie.ai/ai/api/search-image?query=A professional food photography of a freshly baked premium white bread loaf on a light gray background&width=400&height=400&orientation=squarish&flag=5d51c8f7-05fb-4b2a-ae29-f090174243ea" className="w-full h-64 object-cover object-center" alt="상품 이미지"/>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">프리미엄 식빵</h3>
                        <p className="mt-2 text-xl font-bold text-custom">6,000원</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img src="https://creatie.ai/ai/api/search-image?query=A professional food photography of a whole grain bagel on a light gray background, showing sesame seeds and perfect texture&width=400&height=400&orientation=squarish&flag=970142f1-9406-4b86-b03b-3913e2577f3d" className="w-full h-64 object-cover object-center" alt="상품 이미지"/>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">통밀 베이글</h3>
                        <p className="mt-2 text-xl font-bold text-custom">3,500원</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img src="https://creatie.ai/ai/api/search-image?query=A professional food photography of a chocolate brioche bread on a light gray background, showing rich chocolate swirls&width=400&height=400&orientation=squarish&flag=7ed11ff8-9bd3-49c0-9674-9e00fdea284e" className="w-full h-64 object-cover object-center" alt="상품 이미지"/>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">초코 브리오슈</h3>
                        <p className="mt-2 text-xl font-bold text-custom">5,500원</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img src="https://creatie.ai/ai/api/search-image?query=A professional food photography of a fresh French baguette on a light gray background, showing crispy crust&width=400&height=400&orientation=squarish&flag=87900a53-f082-43af-8718-dc0ef04ed719" className="w-full h-64 object-cover object-center" alt="상품 이미지"/>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">프렌치 바게트</h3>
                        <p className="mt-2 text-xl font-bold text-custom">4,000원</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img src="https://creatie.ai/ai/api/search-image?query=A professional food photography of a rye bread loaf on a light gray background, showing dense texture&width=400&height=400&orientation=squarish&flag=633c89a2-a508-4c81-b99a-73521c70b0f6" className="w-full h-64 object-cover object-center" alt="상품 이미지"/>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">호밀빵</h3>
                        <p className="mt-2 text-xl font-bold text-custom">5,000원</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img src="https://creatie.ai/ai/api/search-image?query=A professional food photography of a ciabatta bread on a light gray background, showing rustic texture&width=400&height=400&orientation=squarish&flag=828f04cf-8e53-46ab-8245-8ef67ce67060" className="w-full h-64 object-cover object-center" alt="상품 이미지"/>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">치아바타</h3>
                        <p className="mt-2 text-xl font-bold text-custom">4,500원</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img src="https://creatie.ai/ai/api/search-image?query=A professional food photography of soft dinner rolls on a light gray background, showing fluffy texture&width=400&height=400&orientation=squarish&flag=c431ab40-5eb4-4fa2-b9b9-d4ebfd35ffd9" className="w-full h-64 object-cover object-center" alt="상품 이미지"/>
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">소프트 롤빵</h3>
                        <p className="mt-2 text-xl font-bold text-custom">3,000원</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex justify-center">
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">이전</span>
                        <i className="fas fa-chevron-left"></i>
                    </a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-custom bg-custom text-sm font-medium text-white">1</a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">2</a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">3</a>
                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">8</a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">9</a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">10</a>
                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">다음</span>
                        <i className="fas fa-chevron-right"></i>
                    </a>
                </nav>
            </div>
        </main>
    );
}