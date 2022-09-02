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
          <h4>+ Add a new Service</h4>
        </Link>
      </div>    
      <div className='pservice__list'>
      <div className='pservices__services'>
        <p>Web-Design</p>
        <Link to="user/:userId/services/provided/:serviceId/requests/"style={{textDecoration: 'none', color: 'var(--main)'}}>
            <p className='phover'> 1 new Request</p>
        </Link>     
      </div>
      <div className='pservices__moreinfo'>
        <Link to="/user/:userId/provided/:serviceId/details"style={{textDecoration: 'none', color: 'var(--main)'}}>
          <p className='phover'>More Info</p>
        </Link>
        </div>
      <div className='pservices__edit'> 
        <Link to="/user/:userId/services/provided/:serviceId/edit" style={{textDecoration: 'none', color: 'var(--main-yellow-alt)'}}>
         <p className='phover'>Edit</p>
        </Link>  
      </div>
      <div className='pservices__activate'>
        <p className='phover'>Activate</p>
      </div>
      </div>
      </div>
    </Container>
  )
}

export default ProvidedServiceList