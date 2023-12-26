import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram,faDiscord } from '@fortawesome/free-brands-svg-icons';
import { images } from '../constants';


export const Footer = () => {
  const footerH = {
    height: '30vh'
  }
  return (
    <div className='text-white flex flex-col bg-yellow-500 mt-4 mx-2 rounded-3xl pb-1' style={footerH}>
      <div className='flex justify-center flex-col items-center'>
        <h1 className='text-2xl font-bold mt-5'>Let's be the EGG!</h1>
        <h1 className='text-lg'>Subscibe for receiving news & updates</h1>
        
        <form>
          <input type='text' className='focus:border-none focus:outline-none focus:ring-0 rounded-full text-blue-950 px-5 py-3 mx-5 mt-5'  placeholder='Email...'></input>
          <button type='submit' className='bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  rounded-full'>submit</button>
        </form>
      </div>
        <div className='grid grid-cols-3 mb-0 mt-auto px-6'>

          <div className='justify-self-start mb-1 mt-auto'>
          <h1>Egg Stars 2023 © All rights reserved.</h1>
        </div>
        <div className='justify-self-center flex items-center gap-2'>
          <FontAwesomeIcon icon={faInstagram} size='2xl'/>
          <FontAwesomeIcon icon={faDiscord} size='xl'/>
          <FontAwesomeIcon icon={faEnvelope} size='xl'/>
        </div>
        <div className='justify-self-end flex items-center gap-2'>
          <h1>Designed by Fried-Egg</h1>
          <img src={images.Logo} className='object-contain h-8 w-8' alt='logo'></img>
        </div>

        </div>
    </div>
  );
}
