import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <Container fluid className="footer__container">
      <Row className="justify-content-center">
        <Col md={3}> </Col>
        <Col md={2} className="footer__COL">
          <div>
            <h5>About Us</h5>
            <p>The team</p>
            <p>Help</p>
            <p>Privacy</p>
            <p>Terms & conditions</p>
          </div>
        </Col>
        <Col md={2} className="footer__COL">
          <div>
            <h5>Contact</h5>
            <p>Support</p>
            <p>FAQ</p>
            <p>Cookies policy</p>
            <p>Contact us</p>
          </div>
        </Col>
        <Col md={2} className="footer__COL">
          <div>
            <h5>Social Media</h5>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>

  )
}

export default Footer