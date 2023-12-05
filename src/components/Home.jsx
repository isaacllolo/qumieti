import React, { useState, useEffect } from "react";
import { Card, Button, Image } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import NavBar from './Navbar.jsx';
import axios from 'axios';  // Importa la librería axios para realizar solicitudes HTTP
import '../styles/Home.scss';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Home = () => {
  
  const navigate = useNavigate();
  const [themes, setThemes] = useState([]);
  const handleThemeClick = (themeId) => {
    // Redirige al componente Course.js con el ID del tema
    navigate(`/course/${themeId}`);
  };

  useEffect(() => {
    // Realiza una solicitud al backend para obtener la información de los temas
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${backendUrl}/temas`,
          {
            withCredentials: true
          }
        ); 
        setThemes(response.data);
        console.log('Datos obtenidos del backend:', response.data);
      } catch (error) {
        console.error('Error al obtener datos del backend:', error);
      }
    };

    fetchData();
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <div className="container-fluid">
      <NavBar />
      <div>
      {Array.isArray(themes) && themes.length > 0 ? (
          themes.map((theme) => (
          <Card key={theme.id} className={`theme-card flex-row col-5 mx-auto my-5 ${theme.completado ? 'completed-card' : ''}`}
          >
            <Image className="img-theme-card card-img-left img-fluid" src={`https://picsum.photos/200/100?random=${theme.id}`} alt={`Theme ${theme.id}`} />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
              <Card.Title className="theme-card-title">{theme.nombre}</Card.Title>
              <Card.Text className="theme-card-text">{theme.descripcion}</Card.Text>
              <Button
                variant="primary "
                disabled={`${ theme.completado ?  'disabled' :''}`}
                onClick={() => handleThemeClick(theme.id)} // Llama a la función con el ID del tema
              >
                Explorar
              </Button>
            </Card.Body>
          </Card>
         ))
         ) : (
           <p>No hay temas disponibles</p>
         )}
      </div>
    </div>
  );
};

export default Home;
