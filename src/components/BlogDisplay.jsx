import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
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

  // const keysCount = Object.keys(blogData).length;
  // console.log(keysCount);
 
  const [editingID,setEditingID] = useState("");
  const [isEditing,setIsEditing] = useState(false);
  const [isDeleting,setIsDeleting] = useState(false);

  const [putData,setPutData] = useState({
    "title" : "",
    'content' : ""
  })


  const handleChange = (e) => {
    setPutData({
      ...putData,
      [e.target.name] : e.target.value,

      }
    )
    
  }


  const handleDelete = async (id) =>{
    try{
      const response = await fetch(`${URL}/blogs/${id}`,{
        method : "DELETE",
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(putData)
      })

      if(response.ok){
    
        console.log("Blog DELETED")
      }else {
        console.log("Failed to DELETED")
      }

      

    }catch (error){
      console.log(error);
    }

    setIsDeleting(false);
    window.location.reload();

  }

  const handleOK = async (id) => {
    console.log(putData);
    try{
      const response = await fetch(`${URL}/blogs/${id}`,{
        method : "PUT",
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(putData)
      })

      if(response.ok){
    
        console.log("PUT OK")
      }else {
        console.log("Failed to update")
      }

      

    }catch (error){
      console.log(error);
    }

    window.location.reload();
    setIsEditing(false);

  }

  useEffect(() => {
    const editingBlogItem = blogData.find((item) => item._id === editingID);
    console.log('Editing Blog Item:', editingBlogItem);
    
    // You can use the editingBlogItem as needed, for example, set the title in putData
    if(editingBlogItem){
      setPutData({
        'title' : editingBlogItem.title,
        'content' : editingBlogItem.content,
      })
    }
    

  }, [editingID, blogData]);


  return (
    <div className='bg-yellow-500 mx-3 rounded-3xl  mb-2 grid grid-cols-2  '>
      {blogData.map((blogItem) => (

        <section key={blogItem._id} className='flex flex-col bg-white  m-4 p-2 rounded-2xl '>
          <div className='flex justify-between'>
          { isEditing && blogItem._id === editingID?
            <textarea name='title' maxLength={50} defaultValue={blogItem.title} onChange={handleChange} className='font-bold resize-none text-2xl m-2 h-9 px-2'/>
            :<h2 className='font-bold text-2xl m-2'>{blogItem.title}</h2> 
          } 
            
            <div className='gap-4 flex m-2'>
              { isEditing && blogItem._id === editingID?
                 <div className='mt-1.5'> 
                   <button onClick={() => handleOK(blogItem._id)} className='rounded-full bg-red-600 mx-2 px-2 text-white'>OK</button>
                   <button onClick={() => setIsEditing(false)} className='rounded-full bg-blue-500 mx-2 px-2 text-white'>Cancel</button> 
                 </div>
                 :
                <button onClick={() => {
                  setEditingID(blogItem._id);
                  setIsEditing(true);
                }}>
                  <FontAwesomeIcon icon={faPencil} size='sm'></FontAwesomeIcon>
                </button>

              }

              {isDeleting ? 

                <div className='mt-1.5'>
                <button onClick={() => handleDelete(blogItem._id)} className='rounded-full bg-red-600 mx-2 px-2 text-white'>Confirm</button>
                <button onClick={() => setIsDeleting(false)} className='rounded-full bg-blue-500 mx-2 px-2 text-white'>Cancel</button> 
                </div>
                :

                <button onClick={() => setIsDeleting(true)}>
                <FontAwesomeIcon icon={faTrashCan} size='sm'></FontAwesomeIcon>
                </button>

              }
              
            </div>
          </div>
          
        
            
            { isEditing  && blogItem._id === editingID ?
              <textarea name='content' className='h-56 resize-none p-2' maxLength={600} defaultValue={blogItem.content} onChange={handleChange}/>
              :
              <p className='overflow-x-auto mx-2'>{blogItem.content}</p>
            }
          </section>

      ))}

    </div>
  )
}
