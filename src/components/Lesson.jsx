// Lesson.jsx

import React, { useState } from 'react';
import Slide from './Slide'; 
import Quiz from './Quiz';   
import '../styles/Lesson.scss';

const Lesson = () => {
  const lessonData = {
    slides: [
      { title: 'Slide 1', content: 'Contenido de la diapositiva 1' },
      { title: 'Slide 2', content: 'Contenido de la diapositiva 2' },
      // ... más diapositivas si es necesario
    ],
    quiz: {
      questions: [
        {
          question: 'Pregunta 1',
          options: ['Opción A', 'Opción B', 'Opción C'],
          correctAnswerIndex: 0,
        },
        {
          question: 'Pregunta 2',
          options: ['Opción X', 'Opción Y', 'Opción Z'],
          correctAnswerIndex: 1,
        },
        // ... más preguntas si es necesario
      ],
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleQuizCompletion = () => {
    // Lógica para manejar la finalización del cuestionario, si es necesario
    console.log('Quiz completado');
  };

  return (
    <div className="lesson-container">
      {currentSlide < lessonData.slides.length ? (
        <Slide
          slideData={lessonData.slides[currentSlide]}
          onNextSlide={handleNextSlide}
          onPreviousSlide={handlePreviousSlide}
        />
      ) : (
        <Quiz
          questions={lessonData.quiz.questions}
          onQuizCompletion={handleQuizCompletion}
        />
      )}
    </div>
  );
};

export default Lesson;
