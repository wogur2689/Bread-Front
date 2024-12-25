import Image from 'next/image';
import Link from "next/link";

export default function Banner() {
    return <>
        <div className="glide__track" data-glide-el="track">                
            <ul className="glide__slides">
                <li className="glide__slide">
                    <div className="relative h-[600px]">                            
                        <Image src="/img/banner1.png" alt="빵 이미지" className="w-full h-full object-cover" layout="fill"/>                            
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <div className="text-center text-white">                                    
                                <h2 className="text-4xl font-bold mb-4">신선한 수제 빵</h2>
                                <p className="text-xl mb-8">매일 아침 구워내는 건강한 빵</p>
                                <Link href="/product/list" className="!rounded-button bg-custom px-8 py-3 text-white font-medium hover:bg-opacity-90">지금 주문하기</Link>
                            </div>
                        </div>
                    </div>                    
                </li>
            </ul>
        </div>
    </> 
}