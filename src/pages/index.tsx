import Banner from '@/components/main/Banner';
import Card from '@/components/main/Card';
import Category from '@/components/main/Category';


export default function index() {
    return <>
        <Banner></Banner>
        <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#F5DEB3]">            
            <h2 className="text-3xl font-bold text-center mb-12">베스트셀러</h2>
            <Card></Card>
        </section>
        <section className="bg-[#FFEFD5] py-16">            
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">카테고리</h2>
                <Category></Category>
            </div>
        </section>
        <section className="bg-[#FFE4C4] py-16">            
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">매장 정보</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg p-8 text-center shadow-md">                        
                        <i className="fas fa-clock text-4xl text-custom mb-4"></i>
                        <h3 className="text-xl font-medium mb-4">빵 굽는 시간</h3>
                        <p>매일 오전 6시</p>
                        <p>오후 2시</p>
                    </div>                    
                    <div className="bg-white rounded-lg p-8 text-center shadow-md">
                        <i className="fas fa-map-marker-alt text-4xl text-custom mb-4"></i>
                        <h3 className="text-xl font-medium mb-4">위치</h3>
                        <p>서울특별시 강남구</p>                        
                        <p>베이커리로 123</p>
                    </div>
                    <div className="bg-white rounded-lg p-8 text-center shadow-md">                        
                        <i className="fas fa-store text-4xl text-custom mb-4"></i>
                        <h3 className="text-xl font-medium mb-4">영업시간</h3>
                        <p>매일 07:00 - 22:00</p>
                        <p>연중무휴</p>
                    </div>                
                </div>
            </div>
        </section>
    </>
}