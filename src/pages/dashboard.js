import React from 'react'
import Dnav from '../component/dash navbar'
import Footer from '../component/footer'
import { Link } from 'react-router-dom'
import InnerDashMenu from '../component/InnerDashMenu'
import Dashcontent from '../component/dashcontent'
import ReactDOM from 'react-dom';
import Charts from '../component/charts'

function Dashboard() {
  
  return (
    <div>
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
       Hello Admin,
      this journey of discovery and enlightenment,your Creation of Blog Together with
       managing it should Add Value To The Society. Welcome and enjoy your Time!
       Hello Admin,
      this journey of discovery and enlightenment,your Creation of Blog Together with
       managing it should Add Value To The Society. Welcome and enjoy your Time!</p>
       <div className='dashboard-grid-content'>
       <div className='UUU'><h4>90K+</h4><br /><p>Blogs</p></div>
       <div className='AAA'><h4>90K+</h4><br /><p>Locations</p></div>
       <div className='BBB'><h4>90K+</h4><br /><p>Ideas</p></div>
       </div>
      </div>
    </section>




    
   <Footer/>
    </div>
  )
}

export default Dashboard;