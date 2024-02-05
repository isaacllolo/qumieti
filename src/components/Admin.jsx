// components/AdminPanel.js
import React, { useState, useEffect } from 'react';
import { Accordion, Card, Button, Form, Modal, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_APP_URI;

const Admin = () => {
  const [temas, setTemas] = useState([]);
  const [nuevoTema, setNuevoTema] = useState('');
  const [showAgregarTemaModal, setShowAgregarTemaModal] = useState(false);
  const [showAgregarLeccionModal, setShowAgregarLeccionModal] = useState(false);
  const [nuevoTituloLeccion, setNuevoTituloLeccion] = useState('');
  const [nuevaDescripcionLeccion, setNuevaDescripcionLeccion] = useState('');

  useEffect(() => {
    obtenerDatosAdmin();
  }, []);

  const obtenerDatosAdmin = async () => {
    try {
      const response = await axios.get(`${backendUrl}/admin`);
      setTemas(response.data.datosAdmin);
    } catch (error) {
      console.error('Error al obtener datos del servidor:', error);
    }
  };

  const agregarTema = async () => {
    try {
      const response = await axios.post(`${backendUrl}/admin/temas`, { nombre: nuevoTema });
      console.log('Tema agregado:', response.data.nuevoTema);
      obtenerDatosAdmin();
      setShowAgregarTemaModal(false);
      setNuevoTema('');
    } catch (error) {
      console.error('Error al agregar tema:', error);
    }
  };

  const editarTema = async (id, nuevoNombre) => {
    try {
      const response = await axios.put(`${backendUrl}/admin/temas/${id}`, { nombre: nuevoNombre });
      console.log('Tema editado:', response.data.temaEditado);
      obtenerDatosAdmin();
    } catch (error) {
      console.error('Error al editar tema:', error);
    }
  };

  const eliminarTema = async (id) => {
    try {
      const response = await axios.delete(`${backendUrl}/admin/temas/${id}`);
      console.log('Tema eliminado:', response.data.temaEliminado);
      obtenerDatosAdmin();
    } catch (error) {
      console.error('Error al eliminar tema:', error);
    }
  };

  const agregarLeccion = async (temaId, nuevoTitulo, nuevaDescripcion) => {
    try {
      const response = await axios.post(`${backendUrl}/admin/lecciones`, {
        id_tema: temaId,
        title: nuevoTitulo,
        description: nuevaDescripcion,
      });
      console.log('Lección agregada:', response.data.nuevaLeccion);
      obtenerDatosAdmin();
      setShowAgregarLeccionModal(false);
      setNuevoTituloLeccion('');
      setNuevaDescripcionLeccion('');
    } catch (error) {
      console.error('Error al agregar lección:', error);
    }
  };

  const editarLeccion = async (id, nuevoTitulo, nuevaDescripcion) => {
    try {
      const response = await axios.put(`${backendUrl}/admin/lecciones/${id}`, {
        title: nuevoTitulo,
        description: nuevaDescripcion,
      });
      console.log('Lección editada:', response.data.leccionEditada);
      obtenerDatosAdmin();
    } catch (error) {
      console.error('Error al editar lección:', error);
    }
  };

  const eliminarLeccion = async (id) => {
    try {
      const response = await axios.delete(`${backendUrl}/admin/lecciones/${id}`);
      console.log('Lección eliminada:', response.data.leccionEliminada);
      obtenerDatosAdmin();
    } catch (error) {
      console.error('Error al eliminar lección:', error);
    }
  };

  const agregarQuiz = async (leccionId, pregunta, opciones, respuestaCorrecta) => {
    try {
      const response = await axios.post(`${backendUrl}/admin/quizzes`, {
        id_leccion: leccionId,
        question: pregunta,
        options: opciones,
        correctAnswerIndex: respuestaCorrecta,
      });
      console.log('Quiz agregado:', response.data.nuevoQuiz);
      obtenerDatosAdmin();
    } catch (error) {
      console.error('Error al agregar quiz:', error);
    }
  };

  const editarQuiz = async (id, pregunta, opciones, respuestaCorrecta) => {
    try {
      const response = await axios.put(`${backendUrl}/admin/quizzes/${id}`, {
        question: pregunta,
        options: opciones,
        correctAnswerIndex: respuestaCorrecta,
      });
      console.log('Quiz editado:', response.data.quizEditado);
      obtenerDatosAdmin();
    } catch (error) {
      console.error('Error al editar quiz:', error);
    }
  };

  const eliminarQuiz = async (id) => {
    try {
      const response = await axios.delete(`${backendUrl}/admin/quizzes/${id}`);
      console.log('Quiz eliminado:', response.data.quizEliminado);
      obtenerDatosAdmin();
    } catch (error) {
      console.error('Error al eliminar quiz:', error);
    }
  };

  const agregarSlide = async (leccionId, titulo, contenido, imageUrl) => {
    try {
      const response = await axios.post(`${backendUrl}/admin/slides`, {
        leccion_id: leccionId,
        title: titulo,
        content: contenido,
        image_url: imageUrl,
      });
      console.log('Slide agregado:', response.data.nuevoSlide);
      obtenerDatosAdmin();
    } catch (error) {
      console.error('Error al agregar slide:', error);
    }
  };

  const editarSlide = async (id, titulo, contenido, imageUrl) => {
    try {
      const response = await axios.put(`${backendUrl}/admin/slides/${id}`, {
        title: titulo,
        content: contenido,
        image_url: imageUrl,
      });
      console.log('Slide editado:', response.data.slideEditado);
      obtenerDatosAdmin();
    } catch (error) {
      console.error('Error al editar slide:', error);
    }
  };

  const eliminarSlide = async (id) => {
    try {
      const response = await axios.delete(`${backendUrl}/admin/slides/${id}`);
      console.log('Slide eliminado:', response.data.slideEliminado);
      obtenerDatosAdmin();
    } catch (error) {
      console.error('Error al eliminar slide:', error);
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <Accordion>
        {temas.map((tema) => (
          <Card key={tema.id}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={tema.id.toString()}>
                {tema.nombre}
              </Accordion.Toggle>
              <Button variant="primary" onClick={() => setShowAgregarLeccionModal(tema.id)}>
                Agregar Lección
              </Button>
              <Button variant="danger" onClick={() => eliminarTema(tema.id)}>
                Eliminar Tema
              </Button>
              <Button variant="warning" onClick={() => editarTema(tema.id, `${tema.nombre} Editado`)}>
                Editar Tema
              </Button>
            </Card.Header>
            <Accordion.Collapse eventKey={tema.id.toString()}>
              <Card.Body>
                <ListGroup>
                  {tema.lecciones.map((leccion) => (
                    <ListGroup.Item key={leccion.id}>
                      {leccion.title}
                      <Button variant="primary" onClick={() => setShowAgregarLeccionModal(tema.id, leccion.id)}>
                        Agregar Quiz
                      </Button>
                      <Button variant="danger" onClick={() => eliminarLeccion(leccion.id)}>
                        Eliminar Lección
                      </Button>
                      <Button variant="warning" onClick={() => editarLeccion(leccion.id, `${leccion.title} Editado`, leccion.description)}>
                        Editar Lección
                      </Button>
                      <Accordion>
                        {leccion.quizzes.map((quiz) => (
                          <Card key={quiz.id}>
                            <Card.Header>
                              {quiz.question}
                              <Button variant="danger" onClick={() => eliminarQuiz(quiz.id)}>
                                Eliminar Quiz
                              </Button>
                              <Button
                                variant="warning"
                                onClick={() =>
                                  editarQuiz(quiz.id, `${quiz.question} Editado`, quiz.options, quiz.correctAnswerIndex)
                                }
                              >
                                Editar Quiz
                              </Button>
                            </Card.Header>
                          </Card>
                        ))}
                      </Accordion>
                      <Accordion>
                        {leccion.slides.map((slide) => (
                          <Card key={slide.id}>
                            <Card.Header>
                              {slide.title}
                              <Button variant="danger" onClick={() => eliminarSlide(slide.id)}>
                                Eliminar Slide
                              </Button>
                              <Button variant="warning" onClick={() => editarSlide(slide.id, `${slide.title} Editado`, slide.content, slide.image_url)}>
                                Editar Slide
                              </Button>
                            </Card.Header>
                          </Card>
                        ))}
                      </Accordion>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>

      <Modal show={showAgregarTemaModal} onHide={() => setShowAgregarTemaModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Tema</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNuevoTema">
              <Form.Label>Nombre del Tema</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del tema"
                value={nuevoTema}
                onChange={(e) => setNuevoTema(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAgregarTemaModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={agregarTema}>
            Agregar Tema
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAgregarLeccionModal !== false} onHide={() => setShowAgregarLeccionModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Lección</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNuevoTituloLeccion">
              <Form.Label>Título de la Lección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el título de la lección"
                value={nuevoTituloLeccion}
                onChange={(e) => setNuevoTituloLeccion(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formNuevaDescripcionLeccion">
              <Form.Label>Descripción de la Lección</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Ingrese la descripción de la lección"
                value={nuevaDescripcionLeccion}
                onChange={(e) => setNuevaDescripcionLeccion(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAgregarLeccionModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => agregarLeccion(showAgregarLeccionModal, nuevoTituloLeccion, nuevaDescripcionLeccion)}>
            Agregar Lección
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admin;
