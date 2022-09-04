import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { Link } from 'react-router-dom';

const ServiceDetails = () => {

    return (
        <Container className="mb-4 mt-4">
            {/* ======TITLE====== */}
            <Row className="mb-2">
                <Col>
                    <h3>Max Mustermann Transporter</h3>
                </Col>
            </Row>
            {/* ======LOCATION AND RATING====== */}
            <Row className="mb-3">
                <Col>
                    <div>Berlin, Germany</div>
                    <div>Reviews</div>
                </Col>
            </Row>
            {/* ======IMAGES, DETAILS AND SEND REQUEST BUTTON====== */}
            <Row className="mb-3">
                {/* ======IMAGES CAROUSEL====== */}
                <Col>
                    <Carousel fade className="service__carousel">
                        <Carousel.Item>
                            <img
                            className="d-block w-100 service__carousel-image"
                            src="http://placeimg.com/640/360/any"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 service__carousel-image"
                            src="https://www.placecage.com/640/360"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 service__carousel-image"
                            src="https://picsum.photos/640/360"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 service__carousel-image"
                            src="https://placebear.com/640/360"
                            alt="Third slide"
                            />
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
            <Row className="mb-3">
                <Col>
                <div className="newrequest__price">
                    <h3 className="newrequest__price-value">€15</h3>
                    <p className="newrequest__price-type">per hour</p>
                </div>
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