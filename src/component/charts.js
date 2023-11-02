import React from 'react';
import { Line } from 'react-chartjs-2';
import {
Chart as ChartJS,
LineElement,
CategoryScale,
PointElement,
LinearScale
}
from 'chart.js';
import { useState, useEffect } from "react";


const apiUrl ='https://blog-6hj4.onrender.com/api/post/select'

ChartJS.register(
LineElement,
CategoryScale,
LinearScale,
PointElement
)

const Charts = () => {

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








        const dataa = { 
        labels: ['Posts', 'Views', 'Comments'],
        datasets: [
          {
            data: [data.postCount, data.viewCount, data.commentCount],
            backgroundColor:'transparent',
            backColor: '#f2bc8d',
            pointBorderColor: 'transparent',
            pointBorderwidth: 2,
            tension: 0.5 
          }
        ]
      };
    
      const options = {
        Plugins:{
          legend: false
        },
        Scales:
        {
       x: {
        grid:
        {
          display:false
        }
       },
       y: {
         min: 2,
         max: 10,
         ticks:{
          stepSize: 2,
          callback: (value) => value + 'K'
         },
         grid: {
         borderDash: [10]
         }
       }
        }
      };
         
      return (
        <div style={{width: '100%', height: 'auto'}}>
        <Line data={dataa} options={options}></Line>
        </div>
      );
    }
    
export default Charts;



