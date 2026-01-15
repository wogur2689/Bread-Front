import { Menu } from '@/types/web/menu';
import Image from 'next/image';
import Link from 'next/link';

interface PageProps {
    menuData: Menu[]; // menuData는 배열
}
export default function Header({ menuData }: PageProps) {
    // const [menu, setMenu] = useState<menu[]>([]);

    // //메뉴 불러오기
    // const getMenu = async () => {
    //     try {
    //         const response = await apiClient<ApiResponse<menu[]>>({
    //             method: 'GET',
    //             url: 'http://localhost:3001/menu/menuList'
    //         });
    //         setMenu(response.data);
    //     } catch (err) {
    //         console.error('데이터 불러오기 실패:', err);
    //     }
    // };

    // useEffect(() => {  
    //     getMenu();
    // }, []);

    return <>
        <header className="bg-custom shadow-sm fixed w-full z-50">
            <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">            
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Image src="/bakery.png" alt="로고" className="h-8 w-auto" width={100} height={100}/>                    
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {menuData.map((item, index) => (
                                <Link key={index} href={item.menuUrl} className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">
                                    {item.menuName}
                                </Link>
                            ))}
                            {/* <Link href="/" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">홈</Link>
                            <Link href="/product" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">메뉴</Link>
                            <a href="#" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">매장안내</a>
                            <a href="#" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">주문하기</a>                        
                            <Link href="/user/myPage" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium">마이페이지</Link> */}
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