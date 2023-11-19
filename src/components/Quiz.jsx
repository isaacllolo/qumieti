// Quiz.jsx

import React, { useState } from 'react';
import Slide from './Slide';
import '../styles/Quiz.scss';

const Quiz = ({ questions, onQuizCompletion }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [showScore, setShowScore] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setShowScore(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerButtonClick = (answerIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(updatedAnswers);
  };
  
  const calculateScore = () => {
    // Calcula el puntaje sumando las respuestas correctas
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctIndex ? 1 : 0);
    }, 0);
  
    // Llama a la función proporcionada con el puntaje
    onQuizCompletion(score);
  };

  return (
    <Slide
      slideData={{
        title: showScore ? 'Score' : 'Quiz',
        content: (
          <div className="quiz-questions">
            {showScore ? (
              <>
                <h3>Your Score</h3>
                <p>{calculateScore()} out of {questions.length}</p>
              </>
            ) : (
              <>
                <h3>{questions[currentQuestion].question}</h3>
                <div className="answer-options">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerButtonClick(index)}
                      className={`answer-option ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
                      disabled={showScore}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        ),
      }}
      onNextSlide={handleNextQuestion}
      onPreviousSlide={handlePreviousQuestion}
      showNextButton={!showScore}
    />
  );
};

export default Quiz;
