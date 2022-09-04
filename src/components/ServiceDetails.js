import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'

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
                    <div>
                        <h5>Details</h5>
                        
                    </div>
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