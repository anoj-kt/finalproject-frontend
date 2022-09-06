import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const providedServiceDetails = () => {
  return (
    <Container fluid className="requestd_container">
      <div className='requestd__content'>
          <h2>My Provided Services</h2>
          <p class="lead">Pending Requests</p>
        <div className="requestd__flex">
        <div className='requestd__status'> 
          <Link to="/user/:userid/profile"style={{textDecoration: 'none', color: 'var(--main)'}}>
           <p className='requestp__hover'>David Harbour</p>
          </Link>
          <p>Request Date: 15.08.2022</p>
          <p>Status</p>
        </div>
        <div className="requestd__moreinfo">
          <Link to="/user/:userId/services/provided/:serviceId/requests/:requestId"style={{textDecoration: 'none', color: 'var(--main)'}}>
            <p className='requestp__hover'>More Info</p>
          </Link>
        </div>
        </div>
      </div>s
    </Container>
  )
}

export default providedServiceDetails