import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const MainLayout = ({ children }) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  );
}
