import React from 'react';
import { BrowserRouter , Routes,  Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
    
        <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register/>} />
        
      
        </Routes>
     
      </BrowserRouter>
  </div>
  );
}

export default App;
