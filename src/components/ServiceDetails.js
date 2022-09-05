import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { Link } from 'react-router-dom';
import user from '../assets/images/user.png'

const ServiceDetails = () => {

    return (
        <Container className="mb-4 mt-4">
            {/* ======TITLE====== */}
            <Row className="justify-content-center mb-2">
                <Col md={10}>
                    <h3>Max Mustermann Transporter</h3>
                </Col>
            </Row>
            {/* ======LOCATION AND RATING====== */}
            <Row className="mb-3">
                <Col className="d-flex justify-content-between mb-3" md={{offset: 1, span: 6}}>
                    <div className="service__location">
                        <i class="uil uil-map-marker icon"></i>
                        <h6>Berlin, Germany</h6>
                    </div>
                    <div>Overall score</div>
                </Col>
            </Row>
            {/* ======IMAGES, DETAILS AND SEND REQUEST BUTTON====== */}
            <Row className="justify-content-center mb-3">
                {/* ======IMAGES CAROUSEL====== */}
                <Col sm={12} md={6} className="mb-3">
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
                <Col sm={12} md={4}>
                    <div className="service__details service-border">
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
            <Row className="justify-content-center mb-3">
                <Col sm={12} md={10}>
                <div className="newrequest__price">
                    <h3 className="newrequest__price-value">€15</h3>
                    <p className="newrequest__price-type">per hour</p>
                </div>
                </Col>
            </Row>
            {/* ======DESCRIPTION====== */}
            <Row className="justify-content-center mb-3">
                <Col sm={12} md={10}>
                    <div className="service__description service-border">
                        <h5 style={{borderBottom: "1px solid var(--main-grey)"}}>Description</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos minus aliquam amet fugiat repellendus natus fugit sunt excepturi, veritatis ducimus sed, nesciunt, porro nostrum accusantium. Suscipit repudiandae hic quis rerum modi. Doloremque quo sapiente a excepturi animi dolores dignissimos aut dicta provident quos est, velit laborum totam, et voluptatem magni vero. Adipisci laudantium qui optio impedit eum repellendus suscipit ex, illum laborum aspernatur in eaque rerum repellat voluptatibus. Vero!</p>
                    </div>
                </Col>
            </Row>
            {/* ======REVIEWS====== */}
            <Row className="justify-content-center mb-3">
                <Col sm={12} md={10}>
                    <div className="service__reviews service-border">
                        <h5 style={{borderBottom: "1px solid var(--main-grey)"}}>Reviews</h5>
                        <div className="service__review">
                            <img className="service__review-image" src={user} alt="user image" />
                            <h6 className="service__review-user">John Doe</h6>
                            <p className="service__review-comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eveniet.</p>
                            <div className="service__review-score">
                                Score
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ServiceDetails