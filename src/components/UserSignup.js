import React, { Component }  from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const initialstate = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  birthdate: Date,
  telephone: "",
  address: {
    street: "",
    postalCode: "",
    city:"",
    country:""
  }
}

const passwordVerification= {
  matchPasswords: true,
}

const UserSignup = () => {
  const [newUser, setNewUser] = useState(initialstate);
  const [passwordError, setPasswordError] = useState(passwordVerification)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(newUser.password !== newUser.confirmPassword) {
      setPasswordError({matchPasswords: false})
      return
    } 

    try {
      const res = await fetch('https://farll.herokuapp.com/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser),
        credentials: 'include'
      });
      const data = await res.json();
      console.log(data)
      if(data.user) {
        navigate("/auth/login")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;

    if(name === 'birthdate') {
      let date = new Date(value);
      setNewUser({...newUser, [name]: date});
      return
    }

    if(name === 'street' || name === 'postalCode' || name === 'city' || name === 'country') {
      setNewUser({
        ...newUser, 
        address: {
          ...newUser.address,
          [name]: value
        }
      });
      return
    }

    if(name === 'confirmPassword') {
      setPasswordError({matchPasswords: true})
    }

    setNewUser({...newUser, [name]: value});
  }

  return (
    <Container className="form__container">
      <Row className="justify-content-center">
        <Col lg={{ span: 5}}>
          <h4>Sign Up</h4>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">
                Full name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Please enter your first and last name"
                type="text"
                onChange={handleChange}
                required
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
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
              <FormFeedback invalid>
                Passwords need to match!
              </FormFeedback>
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
                required
                onChange={handleChange}
                invalid={!passwordError.matchPasswords}
              />
              <FormFeedback invalid>
                Passwords need to match!
              </FormFeedback>
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
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="telephone">
                Mobile number
              </Label>
              <PhoneInput
                id="telephone"
                name="telephone"
                country={'de'}
                onChange={(phone, country, e, formattedvalue )=> setNewUser({...newUser, telephone: formattedvalue})}
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
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="postalCode"
                placeholder="Postal Code"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="city"
                placeholder="City"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="country"
                placeholder="Country"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
            <div className="form__submit">
              <button
              className="form__submit-btn button"
              >
                Create Account
              </button>
            </div>
            <Link to="/auth/signup" style={{textDecoration: 'none'}}>
              <p className="form__link">Already have an account? Login here!</p>
             </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default UserSignup
