import Layout from '@/components/common/Layout';
import '../styles/globals.css'; // TailwindCSS 스타일
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  // menuData를 모든 페이지로 전달 (SSR 또는 GSP에서 받아온 경우)
    const { menuData } = pageProps;

    return (
        <Layout menuData={menuData || []}>
            <Component {...pageProps} />
        </Layout>
    );
}