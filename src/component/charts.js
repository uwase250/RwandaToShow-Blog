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

ChartJS.register(
LineElement,
CategoryScale,
LinearScale,
PointElement
)

const Charts = () => {
        const data = { 
        labels: ['Users', 'Blogs', 'Locations', 'Views'],
        datasets: [
          {
            data: [100, 75, 50, 25],
            backgroundColor:'transparent',
            backColor: '#f2bc8d',
            pointBorderColor: 'transparent',
            pointBorderwidth: 4,
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
        <Line data={data} options={options}></Line>
        </div>
      );
    }
    
export default Charts;



