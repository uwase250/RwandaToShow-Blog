import React,{useState} from 'react';
import Button from './button'
import { Link } from 'react-router-dom';


const Card = ({Data}) => {
 const blogId = Data._id;

  return (
    <div className='card'>
      <img src={Data.postImage} alt="" className='location-image'/>
      <h4>{Data.title}</h4><br></br>
      <p>{Data.content.substring(0, 50)}...</p><br></br>
      <Link to={`/blog/${blogId}`}><Button name="Read More" className='card-Button'/></Link>
    </div>
  )
}
export default Card;
