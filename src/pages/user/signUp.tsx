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
                        <label htmlFor="password-confirm" className="block text-sm font-medium text-gray-700">비밀번호 확인</label>
                        <div className="mt-1 relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">                                
                                <i className="fas fa-lock"></i>
                            </span>
                            <input id="password-confirm" name="password-confirm" type="password" required className="!rounded-button appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" placeholder="비밀번호 재입력"/>                        
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
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">휴대폰 번호</label>
                        <div className="mt-1 relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">                                
                                <i className="fas fa-phone"></i>
                            </span>
                            <input id="phone" name="phone" type="tel" required className="!rounded-button appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" placeholder="010-0000-0000"/>
                            </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center">                        
                        <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-custom focus:ring-custom border-gray-300 !rounded"/>                        
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">서비스 이용약관 동의 (필수)</label>                    
                    </div>
                    <div className="flex items-center">
                        <input id="privacy" name="privacy" type="checkbox" required className="h-4 w-4 text-custom focus:ring-custom border-gray-300 !rounded"/>                        
                        <label htmlFor="privacy" className="ml-2 block text-sm text-gray-900">개인정보 처리방침 동의 (필수)</label>                    
                    </div>
                    <div className="flex items-center">
                        <input id="marketing" name="marketing" type="checkbox" className="h-4 w-4 text-custom focus:ring-custom border-gray-300 !rounded"/>                        
                        <label htmlFor="marketing" className="ml-2 block text-sm text-gray-900">마케팅 정보 수신 동의 (선택)</label>                    
                    </div>
                </div>

                <div>
                    <button type="submit" className="!rounded-button group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-custom hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom">                        회원가입
                    </button>
                </div>

                {/* <div className="mt-6">
                    <div className="relative">                        
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-50 text-gray-500">간편 회원가입</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3">                        
                        <button type="button" className="!rounded-button w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm bg-[#FEE500] text-sm font-medium text-gray-700 hover:bg-[#FEE500]/90">                            <i className="fas fa-comment text-black"></i>
                        </button>
                        <button type="button" className="!rounded-button w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm bg-[#03C75A] text-sm font-medium text-white hover:bg-[#03C75A]/90">                            <span className="sr-only">Sign in with Naver</span>
                            <i className="fas fa-n"></i>                        
                        </button>
                        <button type="button" className="!rounded-button w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">                            <i className="fab fa-google text-gray-700"></i>
                        </button>
                    </div>                
                </div> */}
            </form>

            <p className="mt-2 text-center text-sm text-gray-600">
                이미 계정이 있으신가요?
                <a href="#" className="font-medium text-custom hover:text-custom/90">로그인</a>
            </p>
        </div>
    </div>
    </>
}