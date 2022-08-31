import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { Link } from 'react-router-dom';

const initialstate = {
  email: "",
  password: ""
}

const UserLogin = () => {
  const [user, setUser] = useState(initialstate);

  return (
    <Container className="signup__container login__container">
    <Row>
      <Col lg={{ span: 6, offset: 3 }}>
        <h4>Log in</h4>
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
              Log in
            </button>
          </div>
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

export default UserLogin

// <div>
//       <h2>USER LOGIN</h2>
//       <div>
//       <h3>Don't you have an account yet?</h3> 
//       <button>
//         <Link to="/auth/signup">Sign up here!</Link> 
//       </button>       
//       </div>
      
//     </div>