import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const Charts = () => {
    const lineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Monthly Sales',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
          },
        ],
      };
    
      const barChartData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: 'Favorite Colors',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'red',
              'blue',
              'yellow',
              'green',
              'purple',
              'orange',
            ],
          },
        ],
      };
    
      const lineChartOptions = {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      };
    
      const barChartOptions = {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      };
    
      return (
        <div>
          <h1>Dashboard</h1>
          <div className="chart">
            <h2>Line Chart</h2>
            <Line data={lineChartData} options={lineChartOptions} />
          </div>
          <div className="chart">
            <h2>Bar Chart</h2>
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>
      );
    };
    
export default Charts;
