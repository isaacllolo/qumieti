import React, { useState } from "react";
import { Card, Button, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import NavBar from './Navbar.jsx';
import '../styles/Home.scss';

const Home = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Card 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis pharetra aliquet. Sed a elementum lectus. Suspendisse acornare diam ex ", completed: false },
    { id: 2, title: "Card 2", description: "This is card 2", completed: true },
    { id: 3, title: "Card 3", description: "This is card 3", completed: false },
  ]);

  return (
    <div className="container-fluid">
      <NavBar />
      <div>
        {cards.map((card) => (
          <Card className={`theme-card flex-row col-5 mx-auto my-5 ${card.completed ? 'completed-card' : ''}`} key={card.id}>
            <Image className="img-theme-card card-img-left img-fluid" src={`https://picsum.photos/200/100?random=${card.id}`} alt={`Card ${card.id}`} />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
              <Card.Title className="theme-card-title">{card.title}</Card.Title>
              <Card.Text className="theme-card-text">{card.description}</Card.Text>
              <Link to={`/lesson-nav/${card.id}`} style={{ textDecoration: 'none' }}>
                <Button className={`theme-card-button ${card.completed ? 'completed-button' : ''}`} variant="primary" disabled={card.completed}>Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
