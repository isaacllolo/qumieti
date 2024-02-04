import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardBody, Button } from 'react-bootstrap';
import { LessonButton } from './Lesson-nav';
import { Backbutton } from './Backbutton';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Asegúrate de tener instalada la librería axios
import '../styles/Course.scss';
import {headersData} from './configs'
const backendUrl = process.env.VITE_APP_URI;

const Course = () => {

  const {id} = useParams();

  const [tema, setTema] = useState({});
  const [lecciones, setLecciones] = useState([]);


  useEffect(() => {
 
    const obtenerInformacionDelTema = async () => {
       try {
          const response = await axios.get(`${backendUrl}/course/${id}`,headersData);
          console.log(response.data);
          setTema(response.data.tema);
          setLecciones(response.data.lecciones);
          console.log(response.data.lecciones);
       } catch (error) {
          console.error('Error al obtener la información del tema:', error);
       }
    };
 
    obtenerInformacionDelTema();
 }, [id]);
 

  return (
    <div className="course-container">
      <Card className="theme-nav">
        <CardTitle className="theme-title">{tema.nombre}</CardTitle>
        <CardBody className="course-body">
          <div className="course-lessons">
            {lecciones.map((lecciones) => (
              <LessonButton
                key={lecciones.id}
                property1={lecciones.completed}
                completed={lecciones.completed}
                title={lecciones.title}
                description={lecciones.description}
                lessonId={lecciones.id}
              />
            ))}
          </div>
          <Backbutton className="backbutton" to="/" />
        </CardBody>
      </Card>
    </div>
  );
};

export default Course;
