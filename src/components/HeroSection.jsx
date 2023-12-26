import React from 'react'
import { images } from '../constants'
import { Link } from 'react-router-dom'

import useAuth from '../components/useAuth';

export const HeroSection = () => {
    const HeroHeigh = {
        height: '86vh'
    } 

    const { isAuth } = useAuth();
 
   
    

  return (
    <div style={HeroHeigh} className='bg-yellow-500 mx-3  rounded-3xl grid grid-cols-3 mb-2'>
        <div className='items-center text-center flex flex-col justify-center'>
            <h1 className='text-white font-bold text-6xl'>Egg Blog</h1>
            <h1 className='text-white font-bold text-4xl'>for Egg Family</h1>
            { isAuth ? 

                <Link to ='/blogs' className='hover:bg-gray-300 my-5  text-white rounded-full bg-blue-600 py-2 px-3'>Create Your Blog</Link> :
                <Link to ='/signin' className='hover:bg-gray-300 my-5  text-white rounded-full bg-blue-600 py-2 px-3'>Create Your Account</Link>

            }
            
        </div>
        <div className='flex flex-col items-center justify-center'>
            <img src={images.blog_img} alt="blog-img"></img>
        </div>
        <div className='flex flex-col justify-center items-centers'>
            <img src={images.gude_sit} alt='hero-img' className='object-scale-down h-48'></img>
        </div>
    </div>
  )
}
