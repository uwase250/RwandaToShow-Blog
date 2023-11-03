import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const InnerDashMenu = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    console.log("hello modal");
    setModal(!modal);
  };

  const [post, setPost] = useState({
    postImage: null, // Use null for the initial state
    content: "",
    title: "",
  });

  const handleInput = (event) => {
    if (event.target.name === "postImage") {
      setPost({ ...post, postImage: event.target.files[0] });
    } else {
      setPost({ ...post, [event.target.name]: event.target.value });
    }
  };

  function handlecreateblog(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("postImage", post.postImage);
    formData.append("title", post.title);
    formData.append("content", post.content);
    const token = localStorage.getItem("token");
    console.log("Token", token);
    axios
      .post("https://blog-6hj4.onrender.com/api/post/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        alert("Post created successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to create post");
      });
  }
  return (
    <div>
      <div>
        <ul className="dash-inner-menu">
          <Link to="/dashboard" className="ddd">
            Dashboard
          </Link>
          <Link onClick={handleModal} className="ddd">
            Add New Blog
          </Link>
          <Link to="/dashboard/manageblog" className="ddd">
            Manage Blog
          </Link>
          <Link to="/dashboard/analytics" className="ddd">
            Analytics
          </Link>
        </ul>
      </div>
      {modal && (
        <div className="loginModal">
          <button onClick={handleModal} className="close">
            <AiOutlineClose className="iconx" />
          </button>
          <div className="form">
            <h3>Add New Blog</h3>
            <div className="inputController">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Blog Title"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
              />
            </div>
            <div className="inputController">
              <label htmlFor="content">Body</label>
              <input
                type="text"
                placeholder="Body of the blog"
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
              />
            </div>
            <input
              type="file"
              name="postImage"
              placeholder="Upload image"
              onChange={handleInput}
            />
            <button onClick={handlecreateblog}>Add Blog</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InnerDashMenu;
