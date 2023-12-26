import React from 'react'
import { useState } from 'react'
import { ModalPassword } from './ModalPassword';
import { Link, useNavigate } from 'react-router-dom';


export const SignupForm = () => {
  const FormHeigh = {
    height: '70vh'
  }

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    fname: '',
    lname: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  }

  //Modal
  const [isModalOn,setIsModalOn] = useState(false);
  const handleOnClose = () => {
    setIsModalOn(false);
  }

  
  const [numMode,setNumMode] = useState(0);
  const [isInputErr,setIsInputErr] = useState(false);
  const handleMode = () =>{
    for( const data of Object.values(formData) ){
      if(data === ''){
        setNumMode(1);
        setIsInputErr(true);
        return;
      }
    }
    if(formData.password !== formData.passwordConfirmation ){
      setNumMode(0);
      setIsInputErr(true);
      return;
    }
    setIsInputErr(false);
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    handleMode();
    if(isInputErr){
      setIsModalOn(true);
      console.log("something Err")
    }else{
      //correct 
     
      console.log(formData);
      try {
        const response = await fetch("https://egg_api.onrender.com/users",{
          method: 'POST',
          headers : {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify(formData),
        })
        if(response.ok){
          navigate('/login')
          console.log("Post Successfully")
        }else{
          console.log("Failed to Post")
        }
      } catch (error){
        console.error('Error:', error.message);
      }
    }
    
  }



  return (
    <div style={FormHeigh} className='bg-yellow-500 mx-3  rounded-3xl mb-2 flex flex-col items-center justify-center'>
      <ModalPassword visible={isModalOn} onClose={handleOnClose} mode={numMode}/>
      <form className='bg-yellow-700 rounded-3xl px-5 flex flex-col justify-center' onSubmit={handleSubmit}>
        <h1 className='text-center text-white my-2 text-3xl font-bold'>Register</h1>
        <div className='gap-2 flex'>
          <input type='text' name='fname' className='rounded-full my-4 px-2' placeholder='Firstname' onChange={handleChange}></input>
          <input type='text' name='lname' className='rounded-full my-4 px-2' placeholder='Lastname' onChange={handleChange}></input>
        </div>
        
        <input type='text' name='username' className='rounded-full my-4 px-2' placeholder='Username (for login)' onChange={handleChange}></input>
        <input type='text' name='email' className='rounded-full my-4 px-2' placeholder='Email' onChange={handleChange}></input>
        <input type='password' name='password' className='rounded-full my-4 px-2' placeholder='Password' onChange={handleChange}></input>
        <input type='password' name='passwordConfirmation' className='rounded-full my-4 px-2' placeholder='Password Comfirmation' onChange={handleChange}></input>
        <div className='flex justify-center gap-2'>
          <button type='submit' className='bg-red-600 text-white rounded-full px-4 py-1 mb-4'>Submit</button>
          <Link to ='/login'>already has an account?</Link>
        </div>
      </form>
    </div>
  )
}
