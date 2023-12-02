// AdministrarTemas.jsx
import React, { useState } from 'react';
import CRUDCard from './CRUDCard';

const AdministrarTemas = () => {
  const [temas, setTemas] = useState([
    { id: 1, titulo: 'Tema 1', descripcion: 'Descripción del Tema 1', imagen: 'URL de la imagen' },
    // ... otros temas
  ]);
  const [temaEditar, setTemaEditar] = useState(null);
  const [mostrarCRUD, setMostrarCRUD] = useState(false);

  const handleEditarTema = (tema) => {
    setTemaEditar(tema);
    setMostrarCRUD(true);
  };

  const handleEliminarTema = (id) => {
    // Lógica para eliminar el tema con el ID dado
    const temasActualizados = temas.filter((tema) => tema.id !== id);
    setTemas(temasActualizados);
  };

  return (
    <div>
      <h2>Administrar Temas</h2>
      <ul>
        {temas.map((tema) => (
          <li key={tema.id}>
            <strong>{tema.titulo}</strong> - {tema.descripcion}{' '}
            <button onClick={() => handleEditarTema(tema)}>Editar</button>
            <button onClick={() => handleEliminarTema(tema.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {mostrarCRUD && (
        <CRUDCard
          tipo={temaEditar ? 'editarTema' : 'crearTema'}
          onCancel={() => {
            setTemaEditar(null);
            setMostrarCRUD(false);
          }}
          onGuardar={(datos) => {
            // Lógica para guardar o editar el tema
            if (temaEditar) {
              const temasActualizados = temas.map((tema) =>
                tema.id === temaEditar.id ? { ...tema, ...datos } : tema
              );
              setTemas(temasActualizados);
            } else {
              const nuevoTema = { id: temas.length + 1, ...datos };
              setTemas([...temas, nuevoTema]);
            }
            setTemaEditar(null);
            setMostrarCRUD(false);
          }}
          temaEditar={temaEditar}
        />
      )}
    </div>
  );
};

export default AdministrarTemas;
