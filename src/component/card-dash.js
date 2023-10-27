import React,{useState} from 'react';
// import {useEffect} from 'react';
// import Button from './button';
import { Link, Navigate } from 'react-router-dom';
import {AiOutlineClose} from "react-icons/ai";
import axios from 'axios';
import { LuView } from 'react-icons/lu';


const Cardassh = ({Data, id}) =>
 
{
const blogId = Data._id
const views = Data.views
id = blogId

const [title, setTitle] = useState(Data.title); // State for the updated title
  const [body, setBody] = useState(Data.content); // State for the updated body
  const [image, setImage] = useState(null); // State for the updated image

  
const [modal, setModal] = useState(false);
const handleModal = ()=>{
    console.log("hello modal");
  setModal(!modal)
}

const deleteRecord = async(id)=>{
  const token = localStorage.getItem("token");
  console.log("Token", token);
  console.log("Blog id:",id);
   
  try {
    console.log("Cliked");
    const deleteRecords = await axios.delete(`https://blog-6hj4.onrender.com/api/post/delete/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    console.log("NMNMN", deleteRecords)
    if(deleteRecords.status === 200)
    {
      alert("Data Deleted Successful");
      window.location.reload()
    }
  }
  catch (error) {
    if (error.response) {
      console.error('Server Error:', error.response.status, error.response.data);
      alert("Failed to delete data. Server Error.");
    } else if (error.request) {

      console.error('Network Error:', error.message);
      alert("Failed to delete data. Network Error.");
    } else {
      console.error('Request Error:', error.message);
      alert("Failed to delete data. Request Error.");
    }
  }
}

const handleTitleChange = (e) => {
  setTitle(e.target.value);
};

const handleBodyChange = (e) => {
  setBody(e.target.value);
};

const handleImageChange = (e) => {
  // Handle file upload and set the image state
  setImage(e.target.files[0]);
};

const updateRecord = async (_id) => {
  // Implement the API request to update the blog post here
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', body);
  if (image) 
  {
    formData.append('image', image);
  }
  try {
    const updateResponse = await axios.put(`https://blog-6hj4.onrender.com/api/post/update/${id}`,formData,
      {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json; charset=UTF-8",
        },
      })
    if (updateResponse.status === 200) {
      alert('Data Updated Successfully');
      window.location.reload();
    }
  } 
  catch (error) 
  {
    console.error('Error:', error);
    alert('Failed to update data');
  }
};


  return (
    <div>
    <div className='carddash' id={Data._id} Data={Data}>
      <img src={Data.postImage} alt="" className='location-image'/>
      <h4>{Data.title}</h4><br></br>
      <p>{Data.content.substring(0, 50)}...</p><br></br>
      <div className='carddash-link'>
      <button className='views'><LuView/> Views: {Data.views}</button>
      <Link onClick={handleModal}>Update</Link>
      <Link onClick={(e)=>{e.preventDefault();
        deleteRecord(id)}}>Delete</Link>
      </div>
    </div>
  
    {
        modal && <div className="updateModal"> 
      
        <div className="form" id={Data._id} Data={Data}>
        <button onClick={handleModal} className="close"><AiOutlineClose className='iconx'/></button>
        <h3>Update Blog</h3>
        <div className='inputController'>
        <label htmlFor="">Title</label>
        <input type="text" placeholder='post Title' value={title} onChange={handleTitleChange}/>
        </div>
        <div className='inputController'>
        <label htmlFor="">Body</label>
        <input type="text" placeholder='post Body' value={body} onChange={handleBodyChange}/>
        </div>
        <input type="file"  name='image' placeholder='Upload image' onChange={handleImageChange} accept="image/*"/>
        <button onClick={(e)=>{e.preventDefault();
          updateRecord(id)}}>Update</button>
        </div>
        </div>
    }
    </div>
  )
  
}
 
export default Cardassh;

























































































































































































































































































































