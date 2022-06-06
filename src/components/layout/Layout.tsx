import React, { FC, ReactNode } from 'react';
import FooterImage from '../FooterImage';
import ScrollTopButton from '../ScrollTopButton';
import Footer from './Footer';
import Header from './Header';

export type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <main>
      <Header />
      <ScrollTopButton />
      {children}
      <FooterImage />
    </main>
    <Footer />
  </>
);

export default Layout;
