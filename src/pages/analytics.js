import React from 'react'
import Dnav from '../component/dash navbar'
import Footer from '../component/footer'
import { Link } from 'react-router-dom'
import InnerDashMenu from '../component/InnerDashMenu'
import Charts from '../component/charts'
import renderBarChart from '../component/barchart'
import PChart from '../component/piechart'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';



const data = [
{   
    name: 'Posts', 
    Value: 200, 
    pv: 2400, 
    amt: 2400
}, 
{
    name: 'Views', 
    Value: 100, 
    pv: 2400, 
    amt: 2400
}, 

{
    name: 'Comments', 
    Value: 50, 
    pv: 2400, 
    amt: 2400
}, 
];


function Analytics() {
  
  return (
    <div>
    <Dnav/>
    <div className="hero-dashboard">
       <h3>View Our<span> Analytics</span></h3>
     </div>
     <InnerDashMenu/>
<div className='dashboard-charts'>
<div style={{ width: '50%', height: 'auto' }}>
<Charts />
</div>
     
<div style={{ width: '50%', height: 'auto'}}>
<BarChart width={400} height={180} data={data}>
          <XAxis dataKey="name" stroke="black" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#efc611" strokeDasharray="5 5" />
          <Bar dataKey="Value" fill="black" barSize={30} />
</BarChart>  
</div>

<div style={{ width: '50%', height: 'auto' }}>
<PChart />
</div>
</div>
     <Footer className='dashboard-footer'/>
     </div>
   )
 }
 
 export default Analytics;