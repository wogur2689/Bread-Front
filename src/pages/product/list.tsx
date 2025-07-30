import { apiClient, ApiResponse } from "@/api/apiClient";
import Pagination from "@/components/common/Pagination";
import { Product } from "@/types/web/product";
import { useEffect, useState } from "react";
import Link from "next/link";

const TOTAL_ITEMS = 100;
const PAGE_SIZE = 10;

export default function list() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(TOTAL_ITEMS / PAGE_SIZE);
    // const posts = Array.from({ length: PAGE_SIZE }, (_, i) => ({
    //     id: (currentPage - 1) * PAGE_SIZE + i + 1,
    //     title: `게시글 ${(currentPage - 1) * PAGE_SIZE + i + 1}`,
    // }));

    const [data, setData] = useState<Product[]>([]);
    
    //상품 데이터 불러오기
    const fetchData = async () => {
        try {
            const response = await apiClient<ApiResponse<Product[]>>({
                method: 'GET',
                url: 'http://localhost:3001/product/list',
            });
            setData(response.data); // 서버 응답 데이터를 state에 저장
        } catch (err) {
            console.error('데이터 불러오기 실패:', err);
        }
    };

    //상품 상세 페이지로 이동
    const pageMoveDetail = async () => {

    }

    useEffect(() => {  
        fetchData();
    }, []);

    return (
        <>
            <nav className="bg-white shadow">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex"></div>
                        <div className="flex items-center">
                            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500">
                                <i className="fas fa-bell text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <div className="flex justify-between items-center mb-8">
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
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {data.map((product, index) => (
                    <Link href="/product/detail">
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <img src={product.imageUrl} alt="상품 이미지" />
                        <div className="p-4">
                            <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                            <p className="mt-2 text-xl font-bold text-custom">{product.price}원</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </>
    );
}