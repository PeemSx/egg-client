import React from 'react'
import { MainLayout } from '../components/MainLayout'
import { HeroSection } from '../components/HeroSection';

export const HomePage = () => {
  return (
    <div className='font-Kanit'>
        <MainLayout>
          <HeroSection/>  
        </MainLayout>
        
    </div>
  );
}
