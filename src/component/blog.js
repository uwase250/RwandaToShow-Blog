import React, { useState, useEffect } from 'react';
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Comment from '../component/comment'
import { useParams } from 'react-router-dom';



const Blog = () => {

  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});

  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);
  const [first, setCommenterName] = useState(""); // State for commenter's name
  const { _id } = useParams();
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://blog-6hj4.onrender.com/api/post/selectById/${_id}`
        );
  
        if (response.ok) {
          const data = await response.json();
          setPost(data.data);
          setComments(data.data.comments || []);
        } else {
          setError("Failed to fetch post data");
        }
      } catch (error) {
        setError("Error fetching post data: " + error.message);
      }
    };
  
    fetchData();
  }, [_id]);
  
  


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


 


const handleCommentChange = (e) => {
  setNewComment(e.target.value);
};

const handleNameChange = (e) => {
  setCommenterName(e.target.value);
};
const token = localStorage.getItem("token");
console.log("Token", token);
const headers = {
Authorization: `Bearer ${token}`,
}

const handleCommentSubmit = async () => {
  if (newComment.trim() !== "" && first.trim() !== "") {
    try {
      const response = await fetch(
        `https://blog-6hj4.onrender.com/api/post/comment/${_id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({  content: newComment}),
        }
      );

      if (response.ok) {
        const updatedComments = await response.json();
        if (updatedComments.data && updatedComments.data.comments) {
          setComments(updatedComments.data.comments);
          setNewComment("");
          setCommenterName("");
          setError(null);
          alert("Comment added successfully");
        } 
        else 
        {
          alert("Comment successfully added");
        }
      } 
      else
       {
        setError("Failed to add comment to the database");
       }
     }
     catch (error) 
     {
      setError("Error adding comment: " + error.message);
    }
  } 
  else
   {
    setError("Name and comment cannot be empty");
  }
};



  return (
   <div>
   <Navbar />

   <section className='blog-section'>
   <div className='readmore-text'>
   <h1>{blogData.title}</h1><br></br>
   <img src={blogData.postImage} className='read-moreimg' alt=""/><br></br>
   <p>{blogData.content}</p><br></br>
   </div>
</section>

 <div className="comment-form">
 <input
   type="text"
   value={first}
   onChange={handleNameChange}
   placeholder="Your Name"
   className="comment-input"
 />
 <input
   type="text"
   value={newComment}
   onChange={handleCommentChange}
   placeholder="Add your comment..."
   className="comment-input"
 />
 <button onClick={handleCommentSubmit} className="comment-button">
   Comment
 </button>
</div>

<div className="comments">
 <h3>Comments</h3>
 <ul className="comment-list">
   {comments.map((comment, index) => (
    <li key={index}>
    <img src={ comment.author.profile} className='comment-image'/>
    <h4>{comment.author.first}:</h4> 
    <p className='comment-paragraph'>{comment.content} </p>
     </li>
     ))}
    </ul>

    {error && <p className="error-message">{error}</p>}
    </div>
    <div><Footer></Footer></div>
    </div>
  )


}
export default Blog;