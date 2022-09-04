import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { Link } from 'react-router-dom';

const ServiceSendRequest = () => {
  return (
    <Container className="form__container">
      <Row className="justify-content-center align-items-center mb-4">
        <Col md={12} lg={5}> {/* ======TITLE OF SERVICE====== */}
          <h3>Max Mustermann Transporter</h3>
        </Col>
        <Col lg={2} className="newrequest__price-COL"> {/* ======PRICE OF SERVICE====== */}
          <div className="newrequest__price">
            <h3 className="newrequest__price-value">€15</h3>
            <p className="newrequest__price-type">per hour</p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={12} lg={7} >
          <Form>
            <Row className="mb-4"> {/* ======DATE AND TIME====== */}
              <Label>When do you need this service?</Label>
              {/* ======DATE====== */}
              <Col sm={12} md={6}>  
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
              {/* ======TIME====== */}
              <Col sm={12} md={6}>
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
            <Row className="mb-4"> {/* ======ADDRESS====== */}
              <Label>Where do you need this service?</Label>
              <Col>
              {/* ======STREET====== */}
              <FormGroup>
                <Label for="street">
                  Street
                </Label>
                <Input
                  id="street"
                  name="street"
                  placeholder=""
                  type="text"
                  required
                  // onChange={handleChange}
                />
                </FormGroup>
              {/* ======POSTAL CODE====== */}
              <FormGroup>
                <Label for="postalCode">
                  Postal Code
                </Label>
                <Input
                  id="postalCode"
                  name="postalCode"
                  placeholder=""
                  type="text"
                  required
                  // onChange={handleChange}
                />
                </FormGroup>
              <FormGroup>
                <Label for="city">
                  City
                </Label>
                <Input
                  id="city"
                  name="city"
                  placeholder=""
                  type="text"
                  required
                  // onChange={handleChange}
                />
                </FormGroup>
              <FormGroup>
                <Label for="country">
                  Country
                </Label>
                <Input
                  id="country"
                  name="country"
                  placeholder=""
                  type="text"
                  required
                  // onChange={handleChange}
                />
                </FormGroup>
              </Col>
            </Row>
            <Row> {/* ======MESSAGE====== */}
              <Col>
                <FormGroup>
                  <Label for="message">
                    Your message for Max Mustermann Transporter
                  </Label>
                  <Input
                     id="message"
                     name="message"
                     placeholder="Please provide any additional details for the provider here..."
                     type="textarea"
                     style={{ 
                      height: '7rem',
                      resize: 'none' 
                      }}
                  />
                </FormGroup>
              </Col>
            </Row>
            {/* ======SUBMIT BUTTON====== */}
            <div className="form__submit">
              <button className="form__submit-btn button">Confirm request</button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ServiceSendRequest