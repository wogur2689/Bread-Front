const data = [
    {
        'class': 'fas fa-clock text-4xl text-custom mb-4',
        'title': '빵 굽는 시간',
        'info1': '매일 오전 6시',
        'info2': '오후 2시'
    },
    {
        'class': 'fas fa-map-marker-alt text-4xl text-custom mb-4',
        'title': '위치',
        'info1': '서울특별시 강남구',
        'info2': '베이커리로 123'
    },
    {
        'class': 'fas fa-store text-4xl text-custom mb-4',
        'title': '영업시간',
        'info1': '매일 07:00 - 22:00',
        'info2': '연중무휴'
    }
];


export default function Store() {
    return <>
        <section className="bg-[#FFE4C4] py-16">            
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">매장 정보</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((icon, index) => (
                        <div key={index} className="bg-white rounded-lg p-8 text-center shadow-md">                        
                            <i className={icon.class}></i>
                            <h3 className="text-xl font-medium mb-4">{icon.title}</h3>
                            <p>{icon.info1}</p>
                            <p>{icon.info2}</p>
                        </div>                    
                    ))}
                </div>
            </div>
        </section>
    </>
}