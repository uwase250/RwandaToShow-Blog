import React, { useState, useEffect } from 'react';
import Navbar from '../component/navbar'
import Footer from '../component/footer'
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
<div className="comment-section">
<h3>-----ADD COMMENT HERE-----</h3><br></br>
      <div className="comment-form">
        <input
          type="text"
          value={first}
          onChange={handleNameChange}
          placeholder="Your First Name"
          className="comment-input"
        />
        <input
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add Your Comment..."
          className="comment-input"
        />
        <button onClick={handleCommentSubmit} className="comment-button">
          Comment
        </button>
      </div>

      <div className="comments">
        <h4>Comments</h4>
        <ul className="comment-list">
          {comments.map((comment, index) => (
            <li key={index} className="comment-item">
              <img src={comment.author.profile} alt={comment.author.first} className="comment-image" />
              <div className="comment-content">
                <h4 className="comment-author">{comment.author.first}</h4>
                <p className="comment-paragraph">{comment.content}</p>
              </div>
            </li>
          ))}
        </ul>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
    <div><Footer></Footer></div>
    </div>
  )


}
export default Blog;














       






