import Layout from '@/components/common/Layout';
import '../styles/globals.css'; // TailwindCSS 스타일
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { Menu } from '@/types/web/menu';

export default function MyApp({ Component, pageProps }: AppProps) {
  // menuData를 모든 페이지로 전달 (SSR 또는 GSP에서 받아온 경우)
    const [menuData, setMenuData] = useState<Menu[]>([]);

    useEffect(() => {
        const stored = sessionStorage.getItem('menuData');
        if (stored) {
            setMenuData(JSON.parse(stored));
        } else {
            fetch('http://localhost:3001/menu/list')
                .then(res => res.json())
                .then(data => {
                    sessionStorage.setItem('menuData', JSON.stringify(data.data));
                    setMenuData(data.data);
                });
        }
    }, []);

    return (
        <Layout menuData={menuData || []}>
            <Component {...pageProps} />
        </Layout>
    );
}