import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <Container fluid className="home__container">
      <Row>
        <Col className="nopadding">
          <div className="home__text-left">
            <p>What do we do?</p>
            <p>We bring people together</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 6 }} className="home__text-right-COL nopadding">
          <div className="home__text-right">
            <p>Your Service Market is a place where you can share your knowledge and skills with others.</p>
            <p>Give and Recieve Feedback to help the Community</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home