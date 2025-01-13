import Image from 'next/image';

const data = [
    {
        'src': '/img/ButterCroissant.png',
        'name': '버터 크로와상',
        'price': '3,500원'
    },
    {
        'src': '/img/fruitTart.png',
        'name': '통밀 식빵',
        'price': '4,500원'
    },
    {
        'src': '/img/wholeWheatBread.png',
        'name': '과일 타르트',
        'price': '5,500원'
    }
];

export default function Card() {
    return (
        <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#F5DEB3]">            
            <h2 className="text-3xl font-bold text-center mb-12">베스트셀러</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">             
                {data.map((product, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="w-full h-48 relative">
                        <Image
                            src={product.src}
                            alt={product.name}
                            className="object-cover"
                            fill
                        />
                    </div>
                    <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.price}</p>
                    <button className="!rounded-button w-full bg-custom text-white py-2 hover:bg-opacity-90">
                        장바구니 담기
                    </button>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}