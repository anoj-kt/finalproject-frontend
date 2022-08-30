import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h6>About Us</h6>
            <p>The team</p>
            <p>Help</p>
            <p>Privacy</p>
            <p>Terms & conditions</p>
          </div>
        </Col>
        <Col>
          <div>
            <h6>Contact</h6>
            <p>Support</p>
            <p>FAQ</p>
            <p>Cookies policy</p>
            <p>Contact us</p>
          </div>
        </Col>
        <Col>
          <div>
            <h6>Social Media</h6>
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