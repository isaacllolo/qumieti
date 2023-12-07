import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Course from './components/Course.jsx';
import Home from './components/Home.jsx';
import NavBar from './components/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Lesson from './components/Lesson.jsx';
import Quiz from './components/Quiz.jsx';
import Logros from './components/Logros.jsx';
import Simulador from './components/Simulador.jsx';
import Cookies from 'js-cookie';
import axios from 'axios';
import{headersData} from './components/configs.jsx'

const ProtectedRoute = ({ element }) => {
  const [userLoggedIn, setUserLoggedIn] = useState();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = Cookies.get('token');
        console.log('Token enviado desde el frontend:', token);
        if (!token) {
          // Manejar la falta de token (por ejemplo, redirigir al usuario a la página de inicio de sesión)
          setUserLoggedIn(false);
          return;
        }

        const response = await axios.post(
          `${backendUrl}/verify-token`,
          headersData ,{Token:{token}},
);
    // Verificar la respuesta de la verificación del token y establecer el estado en consecuencia
 setUserLoggedIn(true);
      } catch (error) {
        // Manejar errores de manera específica
        if (error.response && error.response.status === 401) {
          console.log('Token inválido o usuario no encontrado');
        } 
        setUserLoggedIn(false);
      }
    };

    verifyToken();
  }, []);
  if (userLoggedIn === true) {
    return  element  ;
  }
  else if (userLoggedIn === false) {
  return <Navigate to="/login" /> ;}
};


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/course/:id"
            element={<ProtectedRoute element={<Course />} />}
          />
          <Route
            path="/lesson/:id"
            element={<ProtectedRoute element={<Lesson />} />}
          />
          <Route
            path="/quiz"
            element={<ProtectedRoute element={<Quiz />} />}
          />
          <Route
            path="/logros"
            element={<ProtectedRoute element={<Logros />} />}
          />
          <Route
            path="/simulador"
            element={<ProtectedRoute element={<Simulador />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
