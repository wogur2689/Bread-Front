export default function signUp() {
    return <>
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">        
        <div className="max-w-md w-full space-y-8">
            <div className="text-center">            
                <h2 className="mt-6 text-3xl font-bold text-gray-900">회원가입</h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">                
                <div className="rounded-md shadow-sm space-y-4">
                    <div>
                        <label htmlFor="userId" className="block text-sm font-medium text-gray-700">아이디</label>
                        <div className="mt-1 relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">                    
                                <i className="fas fa-envelope"></i>
                            </span>
                            <input id="userId" name="userId" type="text" required className="!rounded-button appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" placeholder="test"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">이메일 주소</label>
                        <div className="mt-1 relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">                                
                                <i className="fas fa-envelope"></i>
                            </span>
                            <input id="email" name="email" type="email" required className="!rounded-button appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" placeholder="example@email.com"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">비밀번호</label>
                        <div className="mt-1 relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">                                
                                <i className="fas fa-lock"></i>
                            </span>
                            <input id="password" name="password" type="password" required className="!rounded-button appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" placeholder="비밀번호 입력"/>                        
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">이름</label>
                        <div className="mt-1 relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">                                
                                <i className="fas fa-user"></i>
                            </span>
                            <input id="name" name="name" type="text" required className="!rounded-button appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" placeholder="이름 입력"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="nickName" className="block text-sm font-medium text-gray-700">닉네임</label>
                        <div className="mt-1 relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">                                
                                <i className="fas fa-user"></i>
                            </span>
                            <input id="nickName" name="nickName" type="text" required className="!rounded-button appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" placeholder="닉네임"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="brithDate" className="block text-sm font-medium text-gray-700">생년월일</label>
                        <div className="mt-1 relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">                                
                                <i className="fas fa-user"></i>
                            </span>
                            <input id="brithDate" name="brithDate" type="text" required className="!rounded-button appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" placeholder="0000-00-00"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">주소</label>
                        <div className="mt-1 relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">                                
                                <i className="fas fa-user"></i>
                            </span>
                            <input id="address" name="address" type="text" required className="!rounded-button appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" placeholder="서울시"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">휴대폰 번호</label>
                        <div className="mt-1 relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">                                
                                <i className="fas fa-phone"></i>
                            </span>
                            <input id="phone" name="phone" type="tel" required className="!rounded-button appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" placeholder="010-0000-0000"/>
                            </div>
                    </div>
                </div>

                <div>
                    <button type="submit" className="!rounded-button group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-custom hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom">
                        회원가입
                    </button>
                </div>
            </form>
        </div>
    </div>
    </>
}