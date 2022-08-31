import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Form, FormGroup, Label, Input } from 'reactstrap'



const UserSignup = () => {


  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <FormGroup>
              <Label for="name">
                Full name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Please enter your first and last name"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="This email will be used for logging in"
                type="email"
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
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                placeholder=""
                type="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="birthdate">
                Date of birth
              </Label>
              <Input
                id="birthdate"
                name="birthdate"
                placeholder=""
                type="date"
              />
            </FormGroup>
            <Button
            type="submit"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default UserSignup