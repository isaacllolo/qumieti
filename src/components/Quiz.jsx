import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import axios from 'axios';
import '../styles/Quiz.scss';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Quiz = ({ lessonId, onQuizCompletion }) => {
  const navigate = useNavigate();

  const [question, setQuestion] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [showScore, setShowScore] = useState();
  const [options, setOptions] = useState([]);
  const [correctIndex, setCorrectIndex] = useState();
  useEffect(() => {
    const fetchQuizQuestion = async () => {
      try {
        const response = await axios.get(`${backendUrl}/quiz/${lessonId}`, {
          withCredentials: true ,
          headers: {
             
             'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With','Access-Control-Allow-Origin': '*',
          },
        });
        const quizData = response.data.quiz;
        console.log('Quiz data:', quizData);
    
        // Verifica si las opciones son un string y, si es así, conviértelas a un array
        const parsedOptions= quizData.options;
        console.log('Parsed options:', parsedOptions);
        setQuestion(quizData.question);
        setCorrectIndex(quizData.correctanswerindex);
        setOptions(parsedOptions);
      } catch (error) {
        console.error('Error al obtener preguntas del quiz:', error);
      }
    
    

    };
    fetchQuizQuestion();
  }, [lessonId]);

  const handleAnswerButtonClick = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const calculateScore = () => {
    const isCorrect = selectedAnswer === correctIndex;
    // Verifica si la respuesta seleccionada es la correcta
  
    // Llama a la función proporcionada con el puntaje
    onQuizCompletion(isCorrect ? true : false);
    console.log('Respuesta seleccionada:',selectedAnswer);

    console.log('Respuesta correcta: ',correctIndex);
    // Puedes reiniciar el estado u realizar otras acciones después de calcular el puntaje
    setShowScore(true);
    
  };
const gotoCourse = () => {
  navigate(`/course/${lessonId}`);
}; 

  const handleRetryQuiz = () => {
    setShowScore(false);
    // Aquí puedes agregar lógica adicional para reiniciar el estado si es necesario
  };

 

  return (
    <Slide
      slideData={{
        title: showScore ? 'Resultado' : 'Quiz',
        content: (
          <div className="quiz-questions">
            {showScore ? (
              <>
                <h3>Tu resultado</h3>
                <p>{selectedAnswer === correctIndex ? 'Correcto!' : 'Incorrecto'}</p>
                <Button onClick={handleRetryQuiz}>Reintentar Quiz</Button>
              </>
            ) : (
              <>
                <h3>{question}</h3>
                <div className="answer-options">
                  {options.map((option) => (
                    <Button
                      onClick={() => handleAnswerButtonClick(options.indexOf(option))}
                      className={`answer-option `}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
                <Button onClick={calculateScore}>Comprobar pregunta</Button>
              </>
            )}
          </div>
        ),
      }}
      onNextSlide={gotoCourse}
      showNextButton={!showScore}
    />
  );
};

export default Quiz;
