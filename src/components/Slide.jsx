// Slide.jsx

import React from 'react';
import { Card, CardBody, CardTitle, Container , Button} from 'react-bootstrap';
import '../styles/Slide.scss';
const Slide = ({ slideData, onNextSlide, onPreviousSlide }) => {
  const { title, content } = slideData;

  return (
    <div className="slide-container">
    <Card className="slide-card">
      <CardTitle>{title}</CardTitle>
      <CardBody>
        <div className="slide-content">{content}</div>
      </CardBody>
      <div className="slide-navigation">
        <Button onClick={onPreviousSlide} >
          Anterior
        </Button>
        <Button onClick={onNextSlide} >
          Siguiente
        </Button>
      </div>
    </Card>
    </div>
  );
};

export default Slide;
