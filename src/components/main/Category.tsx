import Image from 'next/image';

const data = [
    {
        'className': 'fas fa-bread-slice text-4xl text-custom',
        'name': '식빵',
    },
    {
        'className': 'fas fa-cookie text-4xl text-custom',
        'name': '페이스트리',
    },
    {
        'className': 'fas fa-birthday-cake text-4xl text-custom',
        'name': '케이크',
    },
    {
        'className': 'fas fa-ice-cream text-4xl text-custom',
        'name': '디저트',
    }
];

export default function Card() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {data.map((icon, index) => (
                <a key={index} href="#" className="text-center">                        
                    <div className="bg-white rounded-full p-8 mb-4 mx-auto w-32 h-32 flex items-center justify-center shadow-md">                            
                        <i className={icon.className}></i>
                    </div>
                    <h3 className="font-medium">{icon.name}</h3>
                </a>
            ))}
        </div>
    );
}