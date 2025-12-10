import { useRouter } from "next/router";
import { useState } from "react";

//객체의 필드 타입 설정
interface FormData {
    userId: string;
    password: string;
    name: string;
    nickName: string;
    email: string;
    birthDate: string;
    address: string;
    phoneNumber: string;
}

export default function SignUp() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        userId: '',
        password: '',
        name: '',
        nickName: '',
        email: '',
        birthDate: '', 
        address: '',
        phoneNumber: ''
    });

    //input 값의 변경을 감지
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    //submit시 실행 이벤트
    const handlerSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        //vaild
        const requiredFields: (keyof FormData)[] = ['userId', 'password', 'name', 'nickName', 'email', 'birthDate', 'address', 'phoneNumber']; // 필수 필드 나열
        if (!requiredFields.every((field) => formData[field].trim() !== '')) {
            console.log('필수 값 누락');
            //TODO popup 추가
            return;
        }

        fetch("http://localhost:3001/users/signUp", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.code === "0000") {
                router.push('/user/login');  // 로그인 페이지로 이동    
            } else {
                alert(data.msg);
            }
        })
        .catch(err => console.error(err));
    }

    return <>
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">        
        <div className="max-w-md w-full space-y-8">
            <div className="text-center">            
                <h2 className="mt-6 text-3xl font-bold text-gray-900">회원가입</h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handlerSubmit} method="POST">                
                <div className="rounded-md shadow-sm space-y-4">
                    <div>
                        <label htmlFor="userId" className="block text-sm font-medium text-gray-700">아이디</label>
                        <div className="mt-1 relative">
                            <input id="userId" 
                                name="userId" 
                                type="text" 
                                required
                                value={formData.userId} 
                                className="!rounded-button appearance-none block w-full pl-2 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" 
                                placeholder="아이디를 입력하세요."
                                onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">이메일 주소</label>
                        <div className="mt-1 relative">
                            <input id="email"
                                name="email"
                                type="email" 
                                required 
                                value={formData.email}
                                className="!rounded-button appearance-none block w-full pl-2 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" 
                                placeholder="example@email.com"
                                onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">비밀번호</label>
                        <div className="mt-1 relative">
                            <input id="password" 
                                name="password" 
                                type="password"
                                value={formData.password} 
                                required 
                                className="!rounded-button appearance-none block w-full pl-2 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" 
                                placeholder="비밀번호 입력"
                                onChange={handleChange}/>                        
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">이름</label>
                        <div className="mt-1 relative">
                            <input id="name" 
                                name="name" 
                                type="text" 
                                value={formData.name} 
                                required 
                                className="!rounded-button appearance-none block w-full pl-2 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" 
                                placeholder="이름 입력"
                                onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="nickName" className="block text-sm font-medium text-gray-700">닉네임</label>
                        <div className="mt-1 relative">
                            <input id="nickName" 
                                name="nickName" 
                                type="text" 
                                value={formData.nickName} 
                                required 
                                className="!rounded-button appearance-none block w-full pl-2 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" 
                                placeholder="닉네임"
                                onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">생년월일</label>
                        <div className="mt-1 relative">
                            <input id="birthDate" 
                                name="birthDate" 
                                type="text" 
                                value={formData.birthDate} 
                                required 
                                className="!rounded-button appearance-none block w-full pl-2 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" 
                                placeholder="0000-00-00"
                                onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">주소</label>
                        <div className="mt-1 relative">
                            <input id="address" 
                                name="address" 
                                type="text" 
                                value={formData.address} 
                                required 
                                className="!rounded-button appearance-none block w-full pl-2 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" 
                                placeholder="서울시"
                                onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">휴대폰 번호</label>
                        <div className="mt-1 relative">
                            <input id="phoneNumber" 
                                name="phoneNumber" 
                                value={formData.phoneNumber} 
                                type="tel" 
                                required 
                                className="!rounded-button appearance-none block w-full pl-2 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" 
                                placeholder="010-0000-0000"
                                onChange={handleChange}/>
                            </div>
                    </div>
                </div>

                <div>
                    <button type="submit" className="!rounded-button group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-custom hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom">
                        회원가입
                    </button>
                </div>
            </form>
        </div>
    </div>
    </>
}