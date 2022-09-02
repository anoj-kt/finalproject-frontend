import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const requestDetails = () => {
    return ( 
        <Container fluid className="requestdetails__container">
            <div className='requestdetails__infotext'>
                <h2>David Harbour requested to use Web-Design Service</h2>
                <p class="lead">Request Details</p>
            </div>

            {/* /user/:userId/services/provided/:serviceId/requests/:requestId */}

        </Container>

     );
}
 
export default requestDetails;