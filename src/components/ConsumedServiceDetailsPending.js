import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import userimage from "../assets/images/user.png";

const consumedServiceDetailsPending = () => {
  return (
    <Container fluid className="servicedetails__container">
            <div className='requestdetails__content'>
                <h2>John Doe's Web-Design Service</h2>
                <p class="lead">Service Details</p>
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
                        <h6>22.09.2022</h6>
                        <h6>15:40</h6>
                        <h6 id="c-yellow">in Progress</h6>
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
                        </div>
                    </Row>
                </Col>
                <input type="text" id="replytextinput" placeholder="Write your reply"></input>
            </div>
        </Container>
  )
}

export default consumedServiceDetailsPending