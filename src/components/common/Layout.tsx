import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Menu } from '@/types/web/menu';

interface LayoutProps {
    children: React.ReactNode;
    menuData: Menu[]; // menuData는 배열
}

const Layout = ({ children, menuData }: LayoutProps) => {
    return (
        <>
            <Header menuData={menuData}/>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;