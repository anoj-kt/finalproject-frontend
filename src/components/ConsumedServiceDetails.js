import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import userimage from "../assets/images/user.png";
import React, { Component }  from 'react';


const consumedServiceDetails = () => {
  return (
    <Container fluid className="requestdetails__container">
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
                        <h6 id="c-green">Completed</h6>
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
                <Col md={12}>
                    {/* <div className='replytext'>
                        <input type="text" id="replytextinput" placeholder="Write your reply"></input>
                    </div> */}
                    <Col md={9} className="">
                      <h4 id="cservicedone">Service is marked as completed from the service provider, please give your Feedback.</h4>
                      <div className="feedbackbuttons">
                        <div className="feedbackbuttons__background"><h6>Extremely Satisfied</h6></div>
                        <div className="feedbackbuttons__background"><h6>Very Satisfied</h6></div>
                        <div className="feedbackbuttons__background"><h6>Satisfied</h6></div>
                        <div className="feedbackbuttons__background"><h6>Slightly Satisfied</h6></div>
                        <div className="feedbackbuttons__background"><h6>Not Satisfied</h6></div>
                      </div>
                      <div className="feedbackarea">
                        <div className="form-outline">
                          <textarea className="form-control" rows="6" cols="160" placeholder="please type your feedback message here."></textarea>
                      </div>
                      </div>
                    </Col>  
                    <div className='requestd__btns'>
                        {/* <Link to="/user/:userId/services/provided/:serviceId/requests/:requestId/status/rejected"> */}
                        <button type="button" class="btn btn-warning">Send Feedback</button>
                        {/* </Link> */}
                    </div> 
                    </Col>
            </div>
        </Container>
  )
}

export default consumedServiceDetails