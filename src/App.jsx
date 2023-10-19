import React from 'react';
import { BrowserRouter , Routes,  Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Course from './components/Course.jsx';
import Home from './components/Home.jsx';
import NavBar from './components/Navbar.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register/>} />
         <Route path="/course" element={<Course/>} />

        
      
        </Routes>
     
      </BrowserRouter>
  </div>
  );
}

export default App;
