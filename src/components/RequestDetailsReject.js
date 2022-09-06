import React, { Component }  from 'react';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap-icons/font/bootstrap-icons.css";
import userimage from '../assets/images/user.png';

const requestDetailsReject = () => {
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
                        <h6 id="sreject">Rejected</h6>
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
                              
                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi praesentium vero, modi sunt ratione exercitationem, officia expedita doloremque dolores culpa cumque molestiae veniam corrupti laborum! Ipsam inventore maiores ad assumenda eius consectetur itaque hic molestias. Necessitatibus totam ducimus alias atque ab quam, rerum dignissimos fugiat asperiores rem sint quis praesentium eveniet saepe fugit itaque quidem nobis! Molestias tempora exercitationem et debitis modi accusantium nisi deserunt at consequuntur labore nostrum, nobis vitae hic aspernatur dolorum enim fuga fugiat omnis nemo? Tempora numquam aut consequuntur itaque mollitia ex quam sit inventore.
                                </p>    
                            </Col>
                        </div>
                    </Row>
                </Col>
                <Col md={12}>
                    <div className='replytext'>
                        <input type="text" id="replytextinputreject" placeholder="Message function disabled. Request rejected."></input>
                        {/* <i class="bi bi-send-fill"></i> */}
                    </div>
                    <div className='requestd__btns2'>  
                        {/* <button type="button" class="btn btn-success">Service Completed</button> */}
                        {/* <button type="button" class="btn btn-danger">Reject Request</button> */}
                    </div> 
                    </Col>
            </div>
        </Container>

     );
}
 
export default requestDetailsReject;