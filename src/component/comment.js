import React from 'react'


const Comment = ({name, image,description}) => {
  return (
    <div>
    <div className='comment-container'>
    <div className='comment-controller'>
    <div className='card-image'>
      <img src={image} alt="" className='comment-image'/>
      </div>
      <div className='comment-holder'>
      <h4>{name}</h4>
      <p>{description}</p><br></br>
      </div>
      </div>
    </div>
    </div>
  )
}
export default Comment;