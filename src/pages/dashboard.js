import React from 'react'
import Dnav from '../component/dash navbar'
import Footer from '../component/footer'
import { Link } from 'react-router-dom'
import InnerDashMenu from '../component/InnerDashMenu'
import Charts from '../component/charts'
import {  FiUsers } from 'react-icons/fi'
import {  MdOutlinePostAdd } from 'react-icons/md'
import { LiaSearchLocationSolid } from 'react-icons/lia'
import { LuView } from 'react-icons/lu'

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
    </p>
    </div>
    </section>
    <div className='containing-card'>
    <div className="card1">
    <div class="container">
      <FiUsers className='card-icon'/>
      <h4><b>100+</b></h4> <br></br>
      <p>Users</p> 
    </div>
    </div>
    <div className="card2">
    <div class="container">
    <MdOutlinePostAdd className='card-icon'/>
      <h4><b>200+</b></h4> <br></br>
      <p>Blogs</p> 
    </div>
</div>
  <div className="card3">
  <div class="container">
  <LiaSearchLocationSolid className='card-icon'/>
    <h4><b>300+</b></h4> <br></br>
    <p>Locations</p> 
  </div>
</div>
  <div class="card4">
  <div class="container">
  <LuView className='card-icon'/>
    <h4><b>400+</b></h4> <br></br>
    <p>Views</p> 
  </div>
</div>
</div>
   <Charts/>
   <Footer className='dashboard-footer'/>
    </div>
  )
}

export default Dashboard;