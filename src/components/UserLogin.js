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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
        credentials: 'include'
      });
      const data = await res.json();
      console.log(data)
      if(data.user) {
        
      }
    } catch (error) {
      console.log(error)
    }
  }
  

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value});
  }

  return (
    <Container className="form__container login__container">
    <Row className="justify-content-center">
      <Col lg={{ span: 5}}>
        <h4>Log in</h4>
        <Form onSubmit={handleSubmit}>
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <FormFeedback invalid>
              Passwords need to match!
            </FormFeedback>
          </FormGroup>
          <div className="form__submit">
            <button
            className="form__submit-btn button"
            >
              Log in
            </button>
          </div>
        </Form>
        <Link to="/auth/signup" style={{textDecoration: 'none'}}>
        <p className="form__link">Dont't have an account yet? Sign up here!</p>
        </Link>
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