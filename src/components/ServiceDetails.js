import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { Link } from 'react-router-dom';

const ServiceDetails = () => {

    return (
        <Container>
            {/* ======TITLE====== */}
            <Row>
                <Col>
                    <h3>Max Mustermann Transporter</h3>
                </Col>
            </Row>
            {/* ======LOCATION AND RATING====== */}
            <Row>
                <Col>
                    <div>Berlin, Germany</div>
                    <div>Reviews</div>
                </Col>
            </Row>
            {/* ======IMAGES, DETAILS AND SEND REQUEST BUTTON====== */}
            <Row>
                {/* ======IMAGES CAROUSEL====== */}
                <Col>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                {/* ======DETAILS AND SEND REQ====== */}
                <Col>
                    <div className="service__details">
                        <h5 style={{borderBottom: "1px solid var(--main-grey)"}}>Details</h5>
                        <div className="service__details-content">
                            <i class="uil uil-user-check icon-green"></i>
                            <p>Member since June 2020</p>
                        </div>
                        <div className="service__details-content">
                            <i class="uil uil-phone icon-green"></i>
                            <p>+49 121211212</p>
                        </div>
                        <div className="service__details-content">
                            <i class="uil uil-map-marker icon-green"></i>
                            <div>
                                <p>Mayway Straße 10</p>
                                <p>Cologne</p>
                                <p>Germany</p>
                            </div>
                        </div>
                    </div>
                    <Link to="./request/new" style={{textDecoration: 'none'}}>
                        <button className="button service__request-btn">
                            Send request
                        </button>
                    </Link>
                </Col>
            </Row>
            {/* ======PRICE====== */}
            <Row>
                <Col>
                </Col>
            </Row>
            {/* ======DESCRIPTION====== */}
            <Row>
                <Col>
                </Col>
            </Row>
            {/* ======REVIEWS====== */}
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default ServiceDetails