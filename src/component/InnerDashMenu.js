import React, { useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"
import { Link } from 'react-router-dom'
import axios from 'axios'

const InnerDashMenu = () => {

    const [modal, setModal] = useState(false);
    const handleModal = ()=>{
        console.log("hello modal");
      setModal(!modal)
    }


    //const UploadTag = () => {
        //const [upload, setupload] = useState([]);
      
        //const handleChange = (event) => {
          //setupload([upload, event.target.value]);
        //};
      
        //const handleUpload = () => {
          //axios.post('/api/tags', { tags })
            //.then((response) => {
              // Success!
           // })
            //.catch((error) => {
              // Error!
           // })
       // }
   // }
   
    return (
        <div>
        <div>
            <ul className='dash-inner-menu'>
            <Link to="/dashboard" className='ddd'>Dashboard</Link>
            <Link onClick={handleModal} className='ddd'>Add New Blog</Link>
            <Link to="/manageblog" className='ddd'>Manage Blog</Link>
            </ul>
        </div>
       
       {
        modal && <div className="loginModal"> 
      
        <button onClick={handleModal} className="close"><AiOutlineClose className='iconx'/></button>
        <div className="form">
        <h3>Add New Blog</h3>
        <div className='inputController'>
        <label htmlFor="">Title</label>
        <input type="text" placeholder='Username'/>
        </div>
        <div className='inputController'>
        <label htmlFor="">Body</label>
        <input type="text" placeholder=''/>
        </div>
        <input type="file"  name='image' placeholder='Upload image'/>
        <Link><input type="submit" value="Add Blog"/></Link>
        </div>
        </div>
    }
    </div>
    )
}

export default InnerDashMenu;