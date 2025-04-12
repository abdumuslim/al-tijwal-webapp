
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomerSupport from './CustomerSupport';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div dir="rtl" className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CustomerSupport />
    </div>
  );
};

export default Layout;
