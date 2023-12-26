import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { PostCreator } from '../components/PostCreator';



export const BlogPages = () => {



  return (
    <div className='font-Kanit'>
      <MainLayout>
        <PostCreator />
      </MainLayout>
    </div>
  );
};
