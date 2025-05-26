import Link from "next/link";
export default function Footer() {
    return <>
        <footer className="bg-[#654321] text-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="text-lg font-medium mb-4">회사 정보</h4>
                    <p className="text-sm">베이커리 프로젝트</p>
                    <p className="text-sm">사업자등록번호: 123-45-67890</p>                
                </div>
                <div>
                    <h4 className="text-lg font-medium mb-4">고객센터</h4>
                    <p className="text-sm">전화: 02-1234-5678</p>
                    <p className="text-sm">이메일: info@bakery.com</p>
                </div>
                <div>                    
                    <h4 className="text-lg font-medium mb-4">SNS</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-300">                            
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">                            
                            <i className="fab fa-facebook text-xl"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">                            
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                    </div>
                </div>                
                <div>
                    <h4 className="text-lg font-medium mb-4">이용약관</h4>
                    <ul className="text-sm space-y-2">                        
                        <li><a href="#" className="hover:text-gray-300">이용약관</a></li>
                        <li><a href="#" className="hover:text-gray-300">개인정보처리방침</a></li>
                        <li><a href="#" className="hover:text-gray-300">청소년보호정책</a></li>                    
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">                
                <p>&copy; 2025 베이커리 프로젝트. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </> 
}