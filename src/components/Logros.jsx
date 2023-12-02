import React from 'react';
import { Card } from 'react-bootstrap';
import NavBar from './Navbar.jsx';
import '../styles/Home.scss';

const Logros = () => {
    const achievements = [
        { id: 1, title: 'Primer Logro', description: '¡Has completado tu primer logro!', completed: true },
        { id: 2, title: 'Explorador', description: 'Has explorado todos los temas.', completed: false },
        // ... otros logros
      ];
      
  return (
    <div className="container-fluid">
      <NavBar />
      <div>
        {achievements.map((achievement) => (
          <Card
            key={achievement.id}
            className={`achievement-card flex-row col-5 mx-auto my-5 ${achievement.completed ? 'completed-card' : ''}`}
          >
            <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
              <Card.Title className="achievement-title">{achievement.title}</Card.Title>
              <Card.Text className="achievement-description">{achievement.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Logros;
