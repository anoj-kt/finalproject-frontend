import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap-icons/font/bootstrap-icons.css";
import userimage from '../assets/images/user.png';

const requestDetails = () => {
    return ( 
        <Container fluid className="requestdetails__container">
            <div className='requestdetails__content'>
                <h2>John Doe requested to use Web-Design Service</h2>
                <p class="lead">Request Details</p>
                <Col md={9}><hr></hr></Col>
            <Row className="justify-content-start">     
                <Col md={1}>
                    <div className='requestdetails__1'>
                        <h6>Date:</h6>
                        <h6>Time:</h6>
                        <h6>Status:</h6>
                        <br></br><br></br>
                        <h6>Message</h6> 
                    </div>
                </Col>
                <Col md={2}>
                    <div className='requestdetails__2'>
                        <h6>12.09.2022</h6>
                        <h6>14:00</h6>
                        <h6>Pending</h6>
                    </div>
                </Col>
                <Col md={2}>
                    <h6>Address</h6>
                    <h6>1600 Pennsylvania Avenue NW Washington, D.C. 20500 U.S.</h6>
                </Col>
            </Row>
                <Col md={9} className="requestdetails__chatbox">
                    <Row className="justify-content-start">
                        <div className='chatboxback'>
                            <Col md={12} className='chatboxbackground'>
                                <img src={userimage} alt="userimage" />
                                {/* <i class="bi bi-person-circle"></i> */}
                                <p id="chatboxmsg">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsa temporibus voluptas dolorum porro, mollitia repudiandae hic quae sint, incidunt impedit ratione molestias quisquam odio unde minus dolores deleniti, iusto ipsum quo omnis iste commodi obcaecati? Id laborum culpa quae, quasi totam iure accusamus officiis. Quaerat ipsam alias sit facere.
                                </p>
                            </Col>
                            <Col md={12} className='chatboxbackground2'>
                                <img src={userimage} alt="userimage" />
                                <p id="chatboxmsg2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores suscipit dolorum magnam illum ullam ducimus? Earum corrupti quidem consequatur.
                                </p>  
                            </Col>
                            <input type="text" className="form-control" placeholder="Write your reply here"/>
                        </div>
                    </Row>
                </Col>
                <Col md={12}>
                    <div className='replytext'>
                        {/* <i class="bi bi-send-fill"></i> */}
                    </div>
                    <div className='requestd__btns'>
                        <Link to="/user/:userId/services/provided/:serviceId/requests/:requestId/status/pending">
                            <button type="button" class="btn btn-success">Approve Request</button>
                        </Link>
                        <Link to="/user/:userId/services/provided/:serviceId/requests/:requestId/status/rejected">
                            <button type="button" class="btn btn-danger">Reject Request</button>
                        </Link>
                    </div> 
                    </Col>
            </div>
        </Container>

     );
}
 
export default requestDetails;