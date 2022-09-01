import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'

const CreateAd = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={{ span: 6}}>
        <h4>Create your advertisement</h4>
        <Form>
          <FormGroup>
            <Label for="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder=""
              type="email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder=""
              type="password"
              required
            />
            <FormFeedback invalid>
              Passwords need to match!
            </FormFeedback>
          </FormGroup>
          <div className="signup__submit">
            <button
            className="signup__submit-btn button"
            >
              Create Ad
            </button>
          </div>
        </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default CreateAd