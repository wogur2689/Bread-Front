export default function MyPage() {
    return <>
    <nav className="bg-white shadow">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">            
            <div className="flex justify-between h-16">
                <div className="flex">
                    <div className="flex-shrink-0 flex items-center">                       
                        <img className="h-8 w-auto" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="로고"/>
                    </div>                </div>
                <div className="flex items-center">
                    <button className="p-2 rounded-md text-gray-400 hover:text-gray-500">                        
                        <i className="fas fa-bell text-xl"></i>
                    </button>
                </div>
            </div>        
        </div>
    </nav>
    <main className="max-w-8xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8">            
            <div className="col-span-12 lg:col-span-3">
                <div className="bg-white shadow rounded-lg p-6 mb-6">
                    <div className="text-center">                        
                        <img className="mx-auto h-24 w-24 rounded-full object-cover" src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young Asian person with a friendly smile, wearing business casual attire, against a neutral background&width=200&height=200&orientation=squarish&flag=66e0af17-bf56-4f20-b443-605db5ff5a28" alt="프로필 이미지"/> 
                        <h2 className="mt-4 text-xl font-semibold text-gray-900">김민수</h2>
                        <p className="text-gray-500">minsu.kim@email.com</p>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button className="!rounded-button bg-custom text-white px-4 py-2 text-sm font-medium">프로필 수정</button>
                    </div>
                </div>

                <nav className="space-y-1">
                    <a href="#" className="bg-custom text-white group rounded-md px-3 py-2 flex items-center text-sm font-medium">                        
                        <i className="fas fa-user-circle w-6"></i>
                        <span>계정 정보</span>
                    </a>                    
                    <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium">                        
                        <i className="fas fa-shopping-bag w-6"></i>
                        <span>주문 내역</span>
                    </a>                    
                    <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium">                        
                        <i className="fas fa-heart w-6"></i>
                        <span>찜한 상품</span>
                    </a>                    
                    <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium">                        
                        <i className="fas fa-ticket-alt w-6"></i>
                        <span>포인트/쿠폰</span>
                    </a>                    
                    <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md px-3 py-2 flex items-center text-sm font-medium">                        
                        <i className="fas fa-question-circle w-6"></i>
                        <span>고객 지원</span>
                    </a>                
                </nav>
            </div>

            <div className="col-span-12 lg:col-span-9 space-y-6">
                <div className="bg-white shadow rounded-lg p-6">                    
                    <h3 className="text-lg font-medium text-gray-900 mb-4">계정 정보 관리</h3>
                    <div className="space-y-4">                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700">이름</label>
                            <input type="text" value="김민수" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"/>                        
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">이메일</label>
                            <input type="email" value="minsu.kim@email.com" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"/>                        
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">현재 비밀번호</label>
                            <input type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"/>                        
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">새 비밀번호</label>
                            <input type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom"/>                        
                        </div>
                        <div className="flex justify-end">
                            <button className="!rounded-button bg-custom text-white px-4 py-2 text-sm font-medium">저장하기</button>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6">                   
                    <h3 className="text-lg font-medium text-gray-900 mb-4">최근 주문 내역</h3>
                    <div className="space-y-4">                        
                        <div className="border rounded-lg p-4">
                            <div className="flex items-center justify-between">                                
                                <div>
                                    <p className="text-sm font-medium text-gray-900">주문번호: #12345</p>                                    
                                    <p className="text-sm text-gray-500">2024.02.15</p>
                                </div>
                                <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">배송완료</span>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">스마트폰 케이스 외 2건</p>
                                <p className="text-sm font-medium text-gray-900 mt-1">45,000원</p>                            
                            </div>
                        </div>
                        <div className="border rounded-lg p-4">
                            <div className="flex items-center justify-between">                                
                                <div>
                                    <p className="text-sm font-medium text-gray-900">주문번호: #12344</p>                                    
                                    <p className="text-sm text-gray-500">2024.02.10</p>
                                </div>
                                <span className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">배송중</span>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">무선이어폰</p>
                                <p className="text-sm font-medium text-gray-900 mt-1">89,000원</p>
                            </div>                        
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6">                    
                    <h3 className="text-lg font-medium text-gray-900 mb-4">포인트/쿠폰</h3>
                    <div className="grid grid-cols-2 gap-4">                        
                        <div className="border rounded-lg p-4">
                            <p className="text-sm text-gray-500">사용 가능한 포인트</p>                            
                            <p className="text-2xl font-bold text-gray-900 mt-1">3,500P</p>
                        </div>
                        <div className="border rounded-lg p-4">                            
                            <p className="text-sm text-gray-500">보유 쿠폰</p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">2장</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6">                    
                    <h3 className="text-lg font-medium text-gray-900 mb-4">회원 탈퇴</h3>
                    <p className="text-sm text-gray-500 mb-4">회원 탈퇴 시 모든 개인정보가 삭제되며, 복구할 수 없습니다.</p>
                    <button className="!rounded-button text-red-600 border border-red-600 px-4 py-2 text-sm font-medium hover:bg-red-50">회원 탈퇴</button>
                </div>
            </div>
        </div>
    </main>
    </>
}