
import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Blog from './component/blog';
import CreateAcc from './pages/createAcc';
import Dashboard from './pages/dashboard';
import Manageblog from './pages/manageblog';
import Analytics from './pages/analytics';

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
        <Route path='/dashboard' element={<Dashboard/>} exact/>  
        <Route path='/manageblog' element={<Manageblog/>}/> 
        <Route path='/analytics' element={<Analytics/>}/> 
      </Routes>
    </Router>
  );
}

export default App;