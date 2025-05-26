import { apiClient, ApiResponse } from '@/api/apiClient';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Layout from '@/components/common/Layout';
import Banner from '@/components/main/Banner';
import Card from '@/components/main/Card';
import Category from '@/components/main/Category';
import Store from '@/components/main/Store';
import { Menu } from '@/types/menu';
import { useEffect } from 'react';

interface PageProps {
    menuData: Menu[];
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
    useEffect(() => {
        // 클라이언트에서 세션 저장
        sessionStorage.setItem('menuData', JSON.stringify(menuData));
    }, [menuData]);

    return <>
        <Banner></Banner>
        <Card></Card>
        <Category></Category>
        <Store></Store>
    </>
}