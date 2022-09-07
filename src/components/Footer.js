import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component }  from 'react';


const Footer = () => {
  return (
    <Container fluid className="footer__container">
      <Row className="justify-content-center">
        <Col md={3} className="footer__COL">
          <div>
             <h5>About Us</h5>
            <a href='#'><p>Our Team</p></a>
            <a href='#'><p>Help</p></a>
            <a href='#'><p>Privacy</p></a>
            <a href='#'><p>Terms & Conditions</p></a>
          </div>
        </Col>
        <Col md={3} className="footer__COL">
          <div>
            <h5>Contact</h5>
            <a href='#'><p>Support</p></a>
            <a href='#'><p>FAQ</p></a>
            <a href='#'><p>Cookies Policy</p></a>
            <a href='#'><p>Contact Us</p></a>
          </div>
        </Col>
        <Col md={3} className="footer__COL">
          <div>
            <h5>Social Media</h5>
            <a href='#'><p>Instagram</p></a>
            <a href='#'><p>Twitter</p></a>
            <a href='#'><p>Facebook</p></a>
            <a href='#'><p>LinkedIn</p></a>
          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default Footer