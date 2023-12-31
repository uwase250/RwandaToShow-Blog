
import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Blog from './component/blog';
import CreateAcc from './pages/createAcc';
import Dashboard from './pages/dashboard';
import Addnewblog from './pages/addnewblog';
import Manageblog from './pages/manageblog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/about' element={<About Us/>}/>
        <Route path='/contact' element={<Contact Us/>}/> 
        <Route path='/login' element={<Login/>}/>    
        <Route path='/blog/:_id' element={<Blog/>}/> 
        <Route path='/createAcc' element={<CreateAcc/>}/>  
        <Route path='/dashboard' element={<Dashboard/>}/> 
        <Route path='/addnewblog' element={<Addnewblog/>}/> 
        <Route path='/manageblog' element={<Manageblog/>}/> 
      </Routes>
    </Router>
  );
}

export default App;