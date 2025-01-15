import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

//객체의 필드 타입 설정
interface FormData {
    userId: string;
    password: string;
}

export default function Login() {
    const router = useRouter();

    const [formData, setFormData] = useState<FormData>({
        userId: '',
        password: '',
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
        const requiredFields: (keyof FormData)[] = ['userId', 'password']; // 필수 필드 나열
        if (!requiredFields.every((field) => formData[field].trim() !== '')) {
            console.log('필수 값 누락');
        }

        fetch("http://localhost:3001/users/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('userId', data.data);
            router.push('/');  // 메인 페이지로 이동
        })
        .catch(err => console.error(err));
        
    }

    return <>
        <div className="flex min-h-screen flex-col">
        <main className="flex-grow">
            <div className="mx-auto max-w-md px-4 py-12 sm:px-6 lg:px-8">                
                <div className="bg-white px-8 py-10 shadow-sm rounded-lg">
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-900">로그인</h2>
                    </div>

                    <form className="space-y-6" onSubmit={handlerSubmit} method="POST">
                        <div>
                            <label htmlFor="userId" className="block text-sm font-medium text-gray-700">아이디</label>
                            <div className="mt-1 relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">                                    
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <input id="userId" 
                                    name="userId" 
                                    type="text" 
                                    required
                                    value={formData.userId} 
                                    className="!rounded-button appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" 
                                    placeholder="아이디를 입력하세요"
                                    onChange={handleChange}/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">비밀번호</label>
                            <div className="mt-1 relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">                                    
                                    <i className="fas fa-lock"></i>
                                </span>
                                <input id="password" 
                                    name="password" 
                                    type="password"
                                    value={formData.password} 
                                    required 
                                    className="!rounded-button appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm" 
                                    placeholder="비밀번호 입력"
                                    onChange={handleChange}/>
                            </div>
                        </div>

                        {/* <div className="flex items-center justify-between">                            
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-custom focus:ring-custom border-gray-300 !rounded"/>                                
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">로그인 상태 유지</label>
                                </div>
                        </div> */}

                        <button type="submit" className="!rounded-button w-full py-3 bg-custom text-white hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom">                            
                        로그인
                        </button>
                    </form>

                    {/* <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">간편 로그인</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-4">                            
                            <button className="!rounded-button flex justify-center items-center py-3 px-4 border border-gray-300 bg-white hover:bg-gray-50">                                <i className="fab fa-google text-[#EA4335]"></i>
                            </button>
                            <button className="!rounded-button flex justify-center items-center py-3 px-4 border border-gray-300 bg-[#FEE500] hover:bg-[#FEE500]/90">                                <i className="fas fa-comment text-[#000000]"></i>
                            </button>
                            <button className="!rounded-button flex justify-center items-center py-3 px-4 border border-gray-300 bg-[#03C75A] hover:bg-[#03C75A]/90">                                <span className="text-white font-bold">N</span>
                            </button>
                        </div>
                    </div> */}

                    <div className="mt-8 text-center text-sm">
                        <a href="#" className="text-custom hover:text-custom/90">아이디/비밀번호 찾기</a>
                        <span className="mx-2 text-gray-500">|</span>
                        <Link href="/user/signUp" className="text-custom hover:text-custom/90">회원가입</Link>
                    </div>
                </div>
            </div>
        </main>
    </div>
    </>
}