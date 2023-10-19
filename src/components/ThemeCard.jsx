import React from 'react';
import './Card.scss';
const ThemeCard = ({ tema, estado }) => {
 return (
    <div className="card">
      <h3>{tema.name}</h3>
      <p>{tema.description}</p>
      <div className="estado">
        {estado === 'terminado' ? 'Terminado' : 'En progreso'}
      </div>
    </div>
 );
};
export default ThemeCard;