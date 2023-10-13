import React from 'react'
import Button from './button'

const Card = ({name, image,description,link}) => {



  return (
    <div className='card'>
      <img src={image} alt="" className='location-image'/>
      <h4>{name}</h4>
      <p>{description}</p>
      
      <Button name="Read More" className='card-Button'/> 
    </div>
  )
}

export default Card;
