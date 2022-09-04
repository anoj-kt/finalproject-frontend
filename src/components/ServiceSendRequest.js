import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { Link } from 'react-router-dom';

const ServiceSendRequest = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Max Mustermann Transporter</h3>
        </Col>
        <Col>
          €15 per hour
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Row>
              <Col>
              <FormGroup>
                <Label for="date">
                  Date
                </Label>
                <Input
                  id="date"
                  name="date"
                  placeholder=""
                  type="date"
                  required
                  // onChange={handleChange}
                />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                <Label for="time">
                  Time
                </Label>
                <Input
                  id="time"
                  name="time"
                  placeholder=""
                  type="time"
                  required
                  // onChange={handleChange}
                />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ServiceSendRequest