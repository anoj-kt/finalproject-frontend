import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
                <Col>
                    <div>IMAGE</div>
                </Col>
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