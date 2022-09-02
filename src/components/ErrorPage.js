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
    <Col md={{ span: 2, offset: 1}}>
      <div className="errorPage">
          <h1>404</h1>
          <h2>not found</h2>
          <p>The page you are looking for might have been removed, had its name changed or temporarily not available.</p>
          <Link to="/"><button>RETURN TO HOMEPAGE</button></Link>
      </div>
    </Col>
        
      
  </Container>
  )
}

export default errorPage