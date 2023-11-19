
import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardBody , Button} from 'react-bootstrap';
import { LessonButton } from './Lesson-nav';
import { Backbutton } from './Backbutton';
import { Link } from 'react-router-dom';  // Importa el componente Link
import '../styles/Course.scss';

const Course = () => {
  const [lessons, setLessons] = useState([]);

  // Supongamos que lessonsData es la información que recibes del backend
  const lessonsData = [
    { id: 1, title: 'Lección 1', description: 'Descripción de la Lección 1', completed: true },
    { id: 2, title: 'Lección 2', description: 'Descripción de la Lección 2', completed: false },
    // ... otras lecciones
  ];

  useEffect(() => {
    // Simulación de la obtención de datos del backend
    setLessons(lessonsData);
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <div className='course-container'>
      <Card className='theme-nav'>
        <CardTitle className='theme-title'>Nombre del tema</CardTitle>
        <CardBody className='course-body'>
          <div className='course-lessons'>
          {lessons.map(lesson => (
            
              <LessonButton
                key={lesson.id}
                property1={lesson.completed ? 'completed' : 'default'}
              completed={lesson.completed}
              title={lesson.title}  // Asegúrate de que title esté definido en tu objeto lesson
              description={lesson.description}  // Asegúrate de que description esté definido en tu objeto lesson
              />
            
          ))}
          </div>
          <Backbutton className="backbutton" to="/"/>
        </CardBody>
      </Card>
    </div>
  );
};

export default Course;
