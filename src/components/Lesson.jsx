import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import Quiz from './Quiz';
import axios from 'axios';
import { useParams ,useNavigate} from 'react-router-dom';
import{headersData} from './configs'
const backendUrl = process.env.REACT_APP_BACKEND_URL;
const Lesson = () => {
  const navigate = useNavigate();
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get(`${backendUrl}/slides/${id}`,headersData,
        {
          headers: {
             
'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
          },
          withCredentials: true
        });
        setSlides(response.data);
      } catch (error) {
        console.error('Error al obtener datos de las slides del backend:', error);
      }
    };

    fetchSlides();
  }, [id]);

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handlePreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
    else {
      navigate(`/course/${id}`);
    }
  };

  const handleQuizCompletion = () => {
    console.log('Quiz completado');
    // Lógica para manejar la finalización del cuestionario, si es necesario
  };

  if (slides.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="lesson-container">
      <h2 className="lesson-title">Lección</h2>
      {currentSlide < slides.length ? (
        <Slide
          slideData={slides[currentSlide]}
          onNextSlide={handleNextSlide}
          onPreviousSlide={handlePreviousSlide}
        />
      ) : (
        <Quiz
          lessonId={id}
          onQuizCompletion={handleQuizCompletion}
        />
      )}
    </div>
  );
};

export default Lesson;
