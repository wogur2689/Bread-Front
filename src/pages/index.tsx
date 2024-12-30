import Banner from '@/components/Banner';
import Link from 'next/link';

export default function index() {
    return <>
        <Banner></Banner>
        <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#F5DEB3]">            
            <h2 className="text-3xl font-bold text-center mb-12">베스트셀러</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="./img/ButterCroissant.png" alt="크로와상" className="w-full h-48 object-cover">                    
                    <div className="p-6">
                        <h3 className="text-xl font-medium mb-2">버터 크로와상</h3>
                        <p className="text-gray-600 mb-4">3,500원</p>
                        <button className="!rounded-button w-full bg-custom text-white py-2 hover:bg-opacity-90">장바구니 담기</button>                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="./img/wholeWheatBread.png" alt="통밀빵" className="w-full h-48 object-cover">                 
                        <div className="p-6">
                        <h3 className="text-xl font-medium mb-2">통밀 식빵</h3>
                        <p className="text-gray-600 mb-4">4,500원</p>
                        <button className="!rounded-button w-full bg-custom text-white py-2 hover:bg-opacity-90">장바구니 담기</button>                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="./img/fruitTart.png" alt="과일타르트" className="w-full h-48 object-cover">                    
                    <div className="p-6">
                        <h3 className="text-xl font-medium mb-2">과일 타르트</h3>
                        <p className="text-gray-600 mb-4">5,500원</p>
                        <button className="!rounded-button w-full bg-custom text-white py-2 hover:bg-opacity-90">장바구니 담기</button>                    </div>
                </div>
            </div>
        </section>
    </>
}