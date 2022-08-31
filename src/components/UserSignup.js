import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Form, FormGroup, Label, Input } from 'reactstrap'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const UserSignup = () => {


  return (
    <Container className="signup__container">
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <h4>Sign Up</h4>
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
                placeholder="You will be using this email to login"
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
            <FormGroup>
              <Label for="telephone">
                Mobile number
              </Label>
              <PhoneInput
                id="telephone"
                country={'de'}
              />
            </FormGroup>
            <Label>
              Address (optional)
            </Label>
            <FormGroup>
              <Input
                name="street"
                placeholder="Street and housenumber"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="postalCode"
                placeholder="Postal Code"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="city"
                placeholder="City"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="country"
                placeholder="Country"
                type="text"
              />
            </FormGroup>
            <div className="signup__submit">
              <button
              className="signup__submit-btn button"
              type="submit"
              >
                Create Account
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default UserSignup
