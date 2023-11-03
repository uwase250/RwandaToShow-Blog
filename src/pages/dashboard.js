import React from 'react'
import Dnav from '../component/dash navbar'
import Footer from '../component/footer'
import InnerDashMenu from '../component/InnerDashMenu'
import {  FiUsers } from 'react-icons/fi'
import {  MdOutlinePostAdd } from 'react-icons/md'
import { LiaSearchLocationSolid } from 'react-icons/lia'
import { LuView } from 'react-icons/lu'
import { useState, useEffect } from "react";
import axios from "axios";

const apiUrl ='https://blog-6hj4.onrender.com/api/post/select'

function Dashboard() {


  const [data, setData] = useState({
    userCount: 0,
    postCount: 0,
    viewCount: 0,
    commentCount: 0,
  });

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const posts = data.data;
        const postsCount = posts.length;

        let commentsCount = 0;
        let viewsCount = 0;
            // Loop through the posts to count comments and views
            posts.forEach((post) => {
              commentsCount += post.comments.length;
              viewsCount += post.views;
            });
    
            setData({
              userCount: 0, // You need to set the user count based on your data
              postCount: postsCount,
              viewCount: viewsCount,
              commentCount: commentsCount,
            });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
    
  return (
    <div className='dash-dash-dash'>
    <Dnav/>
    <div className="hero-dashboard">
       <h3>Manage<span> Your Blog</span> | Dashboard</h3>
     </div>
     <InnerDashMenu/>
    <section className='dashboard-section'>
      <div className='dashboard-content'>
      <p>Hello Admin,
      this journey of discovery and enlightenment,your Creation of Blog Together with
       managing it should Add Value To The Society. Welcome and enjoy your Time!
    </p>
    </div>
    </section>
    <div className='containing-card'>
    <div className="card1">
    <div class="container">
      <FiUsers className='card-icon'/>
      <h4><b>25+</b></h4> <br></br>
      <p>Users</p> 
    </div>
    </div>
    <div className="card2">
    <div class="container">
    <MdOutlinePostAdd className='card-icon'/>
      <h4><b>{data.postCount}+</b></h4> <br></br>
      <p>Posts</p> 
    </div>
</div>
  <div className="card3">
  <div class="container">
  <LiaSearchLocationSolid className='card-icon'/>
    <h4><b>{data.commentCount}+</b></h4> <br></br>
    <p>Comments</p> 
  </div>
</div>
  <div class="card4">
  <div class="container">
  <LuView className='card-icon'/>
    <h4><b>{data.viewCount}+</b></h4> <br></br>
    <p>Views</p> 
  </div>
</div>
</div><br></br>
   <Footer className='dashboard-footer'/>
    </div>
  )
}

export default Dashboard;