import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { PostCreator } from '../components/PostCreator';
import { BlogDisplay } from '../components/BlogDisplay';



export const BlogPages = () => {



  return (
    <div className='font-Kanit'>
      <MainLayout>
        <PostCreator />
        <BlogDisplay/>
      </MainLayout>
    </div>
  );
};
