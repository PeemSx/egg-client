import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
export const PostCreator = () => {
  const userJSONstr = localStorage.getItem('userData')
  const userData = JSON.parse(userJSONstr)
  const [formData,setFormData] = useState({
    title : '',
    content : '',
    author : `${userData.fname} ${userData.lname}`,
    authorID : userData._id,
  });

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  }

  //const navigate = useNavigate();


  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(formData.title === '' || formData.content === ''){
      alert("please fill every fields")
    }else {
      console.log(formData);
      try {
        const response = await fetch("https://egg_api.onrender.com/blogs",{
          method: 'POST',
          headers : {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify(formData),
        })
        if(response.ok){

          console.log("Post Successfully");
          
          
          alert("Post Successfully");
          window.location.reload();
        }else{
          console.log("Failed to Post")
        }
      } catch (error){
        console.error('Error:', error.message);
      }
    }
    //console.log(userData)
  }


  return (
    <div className='bg-yellow-500 mx-3  rounded-3xl my-4 flex flex-col items-center p-4'>
      <form style={{height : '80vh'}} className='flex flex-col w-full' onSubmit={handleSubmit}>
        <h1 className='text-center mb-3 font-bold text-white text-4xl '>Blog Form</h1>
        <div className='flex flex-col gap-4'>
          <input type='text' name='title' className='focus:border-none focus:outline-none focus:ring-0 rounded-full px-3 py-1 w-1/4' placeholder='title...' onChange={handleChange}></input>
          <textarea 
            style={{height : '60vh'}}
            maxLength={2750}
            type='text' 
            name='content'
            className='focus:border-none focus:outline-none focus:ring-0 rounded-2xl px-3 py-2 h-1/2 resize-none' 
            placeholder='Write something...'
            onChange={handleChange}
            >
            
          </textarea>
        </div>
        <div className='flex justify-center mt-4'>
          <button type='submit' className='bg-red-600 hover:bg-red-700 text-white text-sm px-6 py-1  rounded-full font-bold'>POST</button>
        </div>

      </form>
    </div>
  )
}
