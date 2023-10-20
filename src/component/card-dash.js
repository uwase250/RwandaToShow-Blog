import React,{useState} from 'react';
import Button from './button'
import { Link } from 'react-router-dom';
import {AiOutlineClose} from "react-icons/ai"


const Cardassh = ({Data}) => {

const [modal, setModal] = useState(false);
const handleModal = ()=>{
    console.log("hello modal");
  setModal(!modal)
}




  return (
    <div>
    <div className='carddash'>
      <img src={Data.blogImage} alt="" className='location-image'/>
      <h4>{Data.title}</h4><br></br>
      <p>{Data.content.substring(0, 300)}...</p><br></br>
      <div className='carddash-link'>
      <Link onClick={handleModal}>Update</Link>
      <Link>Delete</Link>
      </div>
    </div>
    {
        modal && <div className="loginModal"> 
        
        <button onClick={handleModal} className="close"><AiOutlineClose className='iconx'/></button>
        <div className="form">
        <h3>Update Blog</h3>
        <div className='inputController'>
        <label htmlFor="">Title</label>
        <input type="text" placeholder='Username'/>
        </div>
        <div className='inputController'>
        <label htmlFor="">Body</label>
        <input type="text" placeholder=''/>
        </div>
        <input type="file"  name='image' placeholder='Upload image'/>
        <Link><input type="submit" value="Update"/></Link>
        </div>
        </div>
    }
    </div>
  )
}
export default Cardassh;