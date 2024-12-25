import '../styles/globals.css'; // TailwindCSS 스타일
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}