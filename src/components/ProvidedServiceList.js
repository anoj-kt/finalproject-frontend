import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProvidedServiceList = () => {
  return (
    <Container fluid className='pservice__container'>
      <div className='pservice__createad'>
      <div className='pservice__text'>
        <h3>My Provided Services</h3>
      </div>
      <div className='pservice__create'>
      <Link to="/createad" style={{textDecoration: 'none'}}>
        {/* <i className="uil uil-plus icon"></i> */}
        <h4>+ Add a new Service</h4>
      </Link>
      </div>
      

      <div className='pservice__list'>
      <div className='pservices__services'>
        <p>Web-Design</p>
        <p> 1 new Request</p>
      </div>
      <div className='pservices__moreinfo'>
        <p>More Info</p>
        </div>
      <div className='pservices__activate'>
        <p>Edit</p>
      </div>
      <div className='pservices__deactivate'>
        <p>Activate</p>
      </div>
        
      </div>
      </div>
      

      

    </Container>
  )
}

export default ProvidedServiceList