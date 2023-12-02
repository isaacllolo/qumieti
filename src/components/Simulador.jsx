// SimuladorComponent.jsx
import React, { useState } from 'react';
import Slide from './Slide'; 
import { Card, Form, Button ,Row } from 'react-bootstrap';
import '../styles/Simulador.scss'; // Asegúrate de tener tus estilos
import '../styles/Lesson.scss';
import '../styles/Quiz.scss';



const Simulador = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const scenarios = [
    {
      id: 1,
      image: 'URL_DE_LA_IMAGEN_1',
      text: 'Descripción de la situación 1...',
      options: ['Opción A', 'Opción B', 'Opción C'],
      correctOption: 0,
    },
    // Agrega más escenarios según sea necesario
  ];

  const handleOptionClick = (selectedOption) => {
    console.log(`Escenario ${currentScenario + 1}, Opción seleccionada: ${selectedOption}`);

    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
    } else {
      console.log('Fin del simulador');
    }
  };

  return (
    <div className="lesson-container">
     <h2 className='lesson-title'>Simulador</h2>

      <Slide
        slideData={{
          title: `Escenario ${currentScenario + 1}`,
          content: (
            <div className="scenario">
              <img src={scenarios[currentScenario].image} alt={`Escenario ${currentScenario + 1}`} />
              <p>{scenarios[currentScenario].text}</p>
              <div className="answer-options">
                {scenarios[currentScenario].options.map((option, index) => (
                  <button className={`answer-option  'selected' : ''}`} key={index} onClick={() => handleOptionClick(index)}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ),
        }}
        onNextSlide={() => handleOptionClick(0)} // Puedes personalizar el manejo del siguiente slide
      />
    </div>
  );
};

export default Simulador;
