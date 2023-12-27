import React, { useEffect, useState } from 'react'
import URL from '../constants/urlApi'
import "./style.css"
export const BlogDisplay = () => {

  const [blogData,setBlogData] = useState([]);
  const userJSONstr = localStorage.getItem('userData')
  const userData = JSON.parse(userJSONstr)
  const userID = userData._id

  useEffect(()=>{
    //console.log(userID);  
    fetch(`${URL}/blogs/${userID}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Handle the data
      console.log('Data:', data);
      setBlogData(data)
    }).catch(error => {
      // Handle errors
      console.error('Error:', error);
    });
  },[userID])

  const keysCount = Object.keys(blogData).length;
  console.log(keysCount);
 
 
  return (
    <div className='bg-yellow-500 mx-3 rounded-3xl  mb-2 grid grid-cols-2  '>
      {blogData.map((blogItem) => (

        <section key={blogItem._id} className='flex flex-col bg-white  m-4 p-2 rounded-2xl '>
          <div className='flex justify-between'>
            <h2 className='font-bold text-2xl'>{blogItem.title}</h2> 
            <div className='gap-4 flex'>
              <button>edit</button>
              <button>delete</button>
            </div>
          </div>

          <p className='overflow-x-auto mt-4'>{blogItem.content}</p>
        </section>

      ))}

    </div>
  )
}
