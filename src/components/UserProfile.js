import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import userprofile from "../assets/images/userprofile.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const userProfile = () => {
  return (
    
    <Container fluid className='userprofile__container'>
      <div className="userprofile__container2">
        <Col md={3}>
          <div className='userprofile__info'>
            <h4>Onur Eredo</h4>
            <hr id="uphr"></hr>
            <p>E-Mail: username@useremail.com</p>
            <p>Password: *******</p>
            <p>Birthdate: 26.07.1995</p>
            <p>Mobile number: +49 123 4567890</p>
            <p>Address: Pariser Platz, 10117 Berlin Germany</p>
            </div>
        </Col>
        <Col md={2}>
          <img src={userprofile} id="userprofilepic"></img>
        </Col>
      </div>
      <div className="service-buttons">
        <h6>My Services</h6>
        <hr id="uphr2"></hr>
        <Link to="/user/:userId/services/provided/:serviceId/requests/">
          <button type="button" class="btn btn-warning">My Provided Services</button>
        </Link>
        <Link to="/user/:userId/services/consumed">
          <button type="button" class="btn btn-warning">My Consumed Services</button>
        </Link>
      </div>
    </Container>
  )
}

export default userProfile