import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/images/logo-color.png';

const errorPage = () => {
  return (
    <Container fluid className="errorpage__container">
        <div className='errorPage'></div>
      <Row>
        <Col className="nopadding">
          <img className="logo-color" src={logo} alt="Logo" />
        </Col>
      </Row>
    <Col md={{ span: 2, offset: 1}} className="">
      <div className="errorPage">
          <h1>404</h1>
          <h2>not found</h2>
          <p>The page you are looking for might have been removed, had its name changed or temporarily not available.</p>
          <button>RETURN TO HOMEPAGE</button>
      </div>
    </Col>
        
      
  </Container>
  )
}

export default errorPage



{/* <Col className="nopadding">
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
      </Col> */}