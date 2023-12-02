// AdminPanel.jsx
import React, { useState } from 'react';
import CRUDCard from './CRUDCard';

const AdminPanel = () => {
  const [temas, setTemas] = useState([
    { id: 1, nombre: 'Tema 1', lecciones: [
      { id: 1, titulo: 'Lección 1', descripcion: 'Descripción de la Lección 1' },
      { id: 2, titulo: 'Lección 2', descripcion: 'Descripción de la Lección 2' },
    ] },
    { id: 2, nombre: 'Tema 2', lecciones: [
      { id: 3, titulo: 'Lección 3', descripcion: 'Descripción de la Lección 3' },
      { id: 4, titulo: 'Lección 4', descripcion: 'Descripción de la Lección 4' },
    ] },
  ]);

  const [seccionActual, setSeccionActual] = useState('temas');
  const [accionCRUD, setAccionCRUD] = useState({ tipo: '', id: null });

  const handleCRUDCardClick = (tipo, id = null) => {
    setAccionCRUD({ tipo, id });
  };

  const renderCRUDCard = () => {
    if (seccionActual === 'temas') {
      return <CRUDCard tipo={accionCRUD.tipo} onCancel={() => setAccionCRUD({ tipo: '', id: null })} />;
    } else if (seccionActual === 'lecciones') {
      // Puedes crear otra CRUDCard para lecciones
      // return <LeccionesCRUDCard tipo={accionCRUD.tipo} onCancel={() => setAccionCRUD({ tipo: '', id: null })} />;
    }
    return null;
  };

  const renderSeccionTemas = () => {
    return (
      <div>
        <h3>Administrar Temas</h3>
        {temas.map((tema) => (
          <div key={tema.id}>
            <h4>{tema.nombre}</h4>
            <button onClick={() => handleCRUDCardClick('editarTema', tema.id)}>Editar</button>
            <button onClick={() => handleCRUDCardClick('eliminarTema', tema.id)}>Eliminar</button>
          </div>
        ))}
        <button onClick={() => handleCRUDCardClick('crearTema')}>Crear Tema</button>
      </div>
    );
  };

  return (
    <div>
      <h2>Panel de Administración</h2>
      <div>
        <button onClick={() => setSeccionActual('temas')}>Temas</button>
        <button onClick={() => setSeccionActual('lecciones')}>Lecciones</button>
      </div>
      {renderSeccionTemas()}
      {renderCRUDCard()}
    </div>
  );
};

export default AdminPanel;
