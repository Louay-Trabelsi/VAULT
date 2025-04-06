import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2025 Vault. All rights reserved.</p>
            <Button variant="outline-light" href="#contact">Contact Us</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
