import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const CreateAd = () => {
  return (
    <Container className="form__container">
      <Row className="justify-content-center">
        <Col lg={{ span: 6}}>
        <h4>Create your advertisement</h4>
        <Form>
          {/* ======TITLE====== */}
          <FormGroup>
            <Label for="title">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              placeholder=""
              type="text"
              required
            />
          </FormGroup>
          {/* ======DESCRIPTION====== */}
          <FormGroup>
            <Label for="description">
              Description
            </Label>
            <Input
              id="description"
              name="description"
              placeholder=""
              type="textarea"
              required
              style={{ 
                height: '15rem',
                resize: 'none' 
              }}
            />
          </FormGroup>
          {/* ======PRICE====== */}
          <FormGroup>
            <Label for="description">
              Price
            </Label>
            <Input
              id="description"
              name="description"
              placeholder=""
              type="number"
              required
            />
          </FormGroup>
          {/* ======PRICE CALC TYPE (RADIO)====== */}
          <FormGroup tag="fieldset" className="createad__radio">
            {/* ======PER HOUR====== */}
            <FormGroup check>
              <Input
                name="priceCalculationType"
                type="radio"
              />
              {' '}
              <Label check>
                Per hour
              </Label>
            </FormGroup>
            {/* ======PER SQ MTR====== */}
            <FormGroup check>
              <Input
                name="priceCalculationType"
                type="radio"
              />
              {' '}
              <Label check>
                Per square meter
              </Label>
            </FormGroup>
            {/* ======FIXED====== */}
            <FormGroup check>
              <Input
                name="priceCalculationType"
                type="radio"
              />
              {' '}
              <Label check>
                Fixed
              </Label>
            </FormGroup>
            {/* ======NEGOTIABLE====== */}
            <FormGroup check>
              <Input
                name="priceCalculationType"
                type="radio"
              />
              {' '}
              <Label check>
                Negotiable
              </Label>
            </FormGroup>
          </FormGroup>
          {/* ======IMAGES====== */}
          {/* ======ADDRESS.STREET====== */}
          <Label>
            Address
          </Label>
          <FormGroup>
            <Input
              name="street"
              placeholder="Street and housenumber"
              type="text"
              required
            />
          </FormGroup>
            {/* ======ADDRESS.POSTALCODE====== */}
          <FormGroup>
            <Input
              name="postalCode"
              placeholder="Postal Code"
              type="text"
              required
            />
          </FormGroup>
            {/* ======ADDRESS.CITY====== */}
          <FormGroup>
            <Input
              name="city"
              placeholder="City"
              type="text"
              required
            />
          </FormGroup>
          {/* ======ADDRESS.COUNTRY====== */}
          <FormGroup>
            <Input
              name="country"
              placeholder="Country"
              type="text"
              required
            />
          </FormGroup>
          {/* ======MOBILE NUMBER====== */}
          <FormGroup>
            <Label for="telephone">
              Mobile number
            </Label>
            <PhoneInput
              id="telephone"
              name="telephone"
              country={'de'}
              // onChange={(phone, country, e, formattedvalue )=> setNewUser({...newUser, telephone: formattedvalue})}
            />
          </FormGroup>
          {/* ======SUBMIT BUTTON====== */}
          <div className="form__submit">
            <button className="form__submit-btn button">Create Ad</button>
          </div>
        </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default CreateAd