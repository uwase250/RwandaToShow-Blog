import React, { useState, useEffect } from 'react';
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Comment from '../component/comment'
import { useParams } from 'react-router-dom';

const Blog = () => {
  const { _id } = useParams();
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    fetch(`https://blog-6hj4.onrender.com/api/post/selectById/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [_id]);
  console.log("POSTS", blogData);
  if (!blogData) {
    return <div>Loading...</div>;
  }



  const commenting = [
    {
        name: 'Chateau Le Marara',
        image: 'https://images.unsplash.com/photo-1568871771767-df8f8f580403?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        description: 'This card is just for testing i will add more description ',
       
    },
    {
        name: 'Hotel Les Milles Colline',
        image: 'https://images.unsplash.com/photo-1538683270504-3d09ad7ae739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        description: 'This card is just for testing i will add more description ',
       
    },
    {
        name: 'Nyungwe Forest',
        image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        description: 'This card is just for testing i will add more description ',
    },

]

  return (
   <div>
   <Navbar />

   <section className='blog-section'>
   <div className='readmore-text'>
   <h1>{blogData.title}</h1>
   <img src={blogData.blogImage} className='read-moreimg' alt=""/>
   <p>{blogData.content}</p>
   </div>

</section>
<section className="grad-container">
<h1>Comments</h1>
{commenting.map((comment, index)=>(
<Comment key={index} name={comment.name} image={comment.image}  description={comment.description}/>
 )
 )}

 <div className="container-comment">
       <div className="form-comment">
       <h3>Leave a comment</h3>
       <div className='inputController'>
       <label htmlFor="">comment</label>

       <textarea name="" id="" cols="30" rows="10"></textarea>
       </div>
       <div className='inputController'>
       <label htmlFor="">Name</label>
       <input type="text" placeholder='Your Name'/>
       </div>
       <div className='inputController'>
       <label htmlFor="">Email</label>
       <input type="text" placeholder='Your Email'/>
       </div>
      
       <input type="submit" value="Post Comment"/>
       </div>

      </div>

</section>
<Footer />
</div>
  );

}
export default Blog;