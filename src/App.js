
import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/about' element={<About Us/>}/>
        <Route path='/contact' element={<Contact Us/>}/> 
        <Route path='/login' element={<Login/>}/>    
      </Routes>
    </Router>
  );
}

export default App;