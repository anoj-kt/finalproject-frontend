import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const requestDetails = () => {
    return ( 
        <Container fluid className="requestdetails__container">
            <div className='requestdetails__content'>
                <h2>David Harbour requested to use Web-Design Service</h2>
                <p class="lead">Request Details</p>
                <hr></hr>
            <div className='requestdetails__grid'>
                <h6>Date</h6>
                <p>12.09.2022</p>
                <h6>Time</h6>
                <p>14:00</p>
                <h6>Status</h6>
                <p>Pending</p>
                <h6>Address: 1600 Pennsylvania Avenue NW Washington, D.C. 20500 U.S.</h6>

            </div>
            </div>

            {/* /user/:userId/services/provided/:serviceId/requests/:requestId */}

        </Container>

     );
}
 
export default requestDetails;