import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';

export const SigninForm = () => {
    const FormHeigh = {
        height: '70vh'
      }
    
      const [formData,setFormData] = useState({    
        username: '',      
        password: '',
 
      });
      
      const navigate = useNavigate();

      const handleChange = (e) =>{
        setFormData({
          ...formData,
          [e.target.name] : e.target.value,
        })
      }
    
      const [isInputErr,setIsInputErr] = useState(false);
      const [serverMsg,setServerMsg] = useState("");

      const handleMode = () =>{
        for( const data of Object.values(formData) ){
          if(data === ''){
            setIsInputErr(true);
            return;
          }
        }
       
        setIsInputErr(false);
      }
      const [userData,setUserData] = useState([]);

      useEffect(() => {
        console.log("UserData", userData);
      }, [userData]);

      const handleSubmit = async (e) =>{
        e.preventDefault();
        handleMode();
        if(isInputErr){
          console.log("something Err")
        }else{

          console.log(formData);
          try {
            const response = await fetch("https://egg_api.onrender.com/users/login",{
              method: 'POST',
              headers : {
                'Content-Type' : 'application/json',
              },
              body: JSON.stringify(formData),
            })
            if(response.ok){
              const {user,message,token} = await response.json();
              setServerMsg(message);
              console.log("Login Successful:");
              setUserData(user);
              localStorage.setItem('userData',JSON.stringify(user));
              localStorage.setItem('token',token);  
              navigate('/');
            }else{
              console.log("Failed to Login")
            }
          } catch (error){
            console.error('Error:', error.message);
          }
        }       
      }
    
      return (
        <div style={FormHeigh} className='bg-yellow-500 mx-3  rounded-3xl mb-2 flex flex-col items-center justify-center'>

          <form className='bg-yellow-700 rounded-3xl px-5 flex flex-col justify-center' onSubmit={handleSubmit}>
            <h1 className='text-center text-white my-2 text-3xl font-bold'>Login</h1>                 
            <input type='text' name='username' className='rounded-full my-4 px-2' placeholder='Username (for login)' onChange={handleChange}></input>           
            <input type='password' name='password' className='rounded-full my-4 px-2' placeholder='Password' onChange={handleChange}></input>       
            <div className='flex justify-center gap-2'>
              <button type='submit' className='bg-red-600 text-white rounded-full px-4 py-1 mb-4'>Submit</button>
            </div>
          </form>

          <div className='text-center'>   
            <h1>{serverMsg}</h1>   
          </div>
        </div>
      )
}
