
import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Blog from './component/blog';
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
        <Route path='/blog/:_id' element={<Blog/>}/>  
        <Route path='/dashboard' element={<Dashboard/>} exact/>  
        <Route path='/dashboard/manageblog' element={<Manageblog/>}/> 
        <Route path='/dashboard/analytics' element={<Analytics/>}/> 
      </Routes>
    </Router>
  );
}

export default App;