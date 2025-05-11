import { apiClient, ApiResponse } from '@/api/apiClient';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Banner from '@/components/main/Banner';
import Card from '@/components/main/Card';
import Category from '@/components/main/Category';
import Store from '@/components/main/Store';
import { Menu } from '@/types/menu';

interface PageProps {
    menuData: Menu[]; // menuData는 배열
}

export async function getStaticProps() {
    const res = await apiClient<ApiResponse<Menu[]>>({
                    method: 'GET',
                    url: 'http://localhost:3001/menu/menuList'
                });

    const menuData = res.data;

    return {
        props: {
            menuData,
        },
        revalidate: 3600, // ISR 적용 : 1시간마다 변경
    };
}

export default function index({ menuData }: PageProps) {
    return <>
        <Header menuData={menuData}></Header>
        <Banner></Banner>
        <Card></Card>
        <Category></Category>
        <Store></Store>
        <Footer></Footer>
    </>
}