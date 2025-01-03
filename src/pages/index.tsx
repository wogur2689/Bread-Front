import Banner from '@/components/main/Banner';
import Card from '@/components/main/Card';


export default function index() {
    return <>
        <Banner></Banner>
        <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#F5DEB3]">            
            <h2 className="text-3xl font-bold text-center mb-12">베스트셀러</h2>
            <Card></Card>
        </section>
    </>
}