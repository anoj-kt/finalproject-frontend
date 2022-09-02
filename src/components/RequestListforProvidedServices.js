import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const providedServiceDetails = () => {
  return (
    <Container fluid className="requestd_container">
      <div className='requestd__infotext'>
        <p class="h2">Request for my ... Service</p>
        <p class="lead">Pending Requests</p>
      </div>
    </Container>
  )
}

export default providedServiceDetails