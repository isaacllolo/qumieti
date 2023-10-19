import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
const Course = () => {
    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);
    return (
      <Container>
        <Row>
          <Col md="6">
            <h3>Course Title</h3>
            <p>Course Description</p>
            <Button color="primary" onClick={toggle}>Enroll</Button>
          </Col>
          <Col md="6">
            <h3>Course Title</h3>
            <p>Course Description</p>
            <Button color="primary" onClick={toggle}>Enroll</Button>
          </Col>
        </Row>
        <Modal show={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Enroll</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Container>
  );
};
export default Course;