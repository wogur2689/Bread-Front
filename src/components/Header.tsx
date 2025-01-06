import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
    return <>
        <header className="bg-custom shadow-sm fixed w-full z-50">
            <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">            
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Image src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="로고" className="h-8 w-auto" width={100} height={100}/>                    
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link href="/" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">홈</Link>
                            <Link href="/product" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">메뉴</Link>
                            <a href="#" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">매장안내</a>
                            <a href="#" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">주문하기</a>                        
                            <Link href="/user/myPage" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">마이페이지</Link>
                        </div>                
                    </div>
                    <div className="flex items-center">
                        <button className="text-white p-2 hover:text-gray-200">                        
                            <i className="fas fa-shopping-cart text-xl"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    </> 
}