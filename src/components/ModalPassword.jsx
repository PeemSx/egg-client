import React from 'react'


export const ModalPassword = ({visible, onClose, mode}) => {
  let text
  if(!visible) return null;

  if(mode === 0){
    text = "Your Password isn't the same";
  }else{
    text = "Please fill in all fields";
  }
  
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex  justify-center items-center'>
        <div className='bg-yellow-400 p-4 rounded-3xl'>
            <h1 className='font-bold my-4'>{text}</h1>
            <div className='flex justify-center'>
                <button className='bg-red-600 text-white rounded-full px-4 py-1 mb-4' onClick={onClose}>OK</button>
            </div>
        </div>
       
    </div>
  )
}
