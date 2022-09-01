import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const initialstate = {
  title: "",
  description: "",
  price: "",
  priceCalculationType: "",
  address: {
    street: "",
    postalCode: "",
    city:"",
    country:""
  },
  telephone: ""
}

const CreateAd = () => {
  const [newAd, setNewAd] = useState(initialstate);

  const handleChange = (e) => {
    const {name, value} = e.target;

    if(name === 'street' || name === 'postalCode' || name === 'city' || name === 'country') {
      setNewAd({
        ...newAd, 
        address: {
          ...newAd.address,
          [name]: value
        }
      });
      return
    }

    setNewAd({...newAd, [name]: value});
  }

  return (
    <Container className="form__container">
      <Row className="justify-content-center">
        <Col xl={{ span: 6}} >
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </FormGroup>
          {/* ======PRICE AND PRICE TYPE====== */}
          <FormGroup tag="fieldset" className="createad__radio">
            {/* ======PRICE====== */}
            <FormGroup>
              <Label>
                Price
              </Label>
              <Input
                name="price"
                type="text"
                onChange={handleChange}
              />
              {' '}
            </FormGroup>
            {/* ======PER HOUR====== */}
            <FormGroup check>
              <Input
                name="priceCalculationType"
                type="radio"
                value={'per_hour'}
                onChange={handleChange}
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
                value={'per_squared_meter'}
                onChange={handleChange}
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
                value={'fixed'}
                onChange={handleChange}
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
                value={'negotiable'}
                onChange={handleChange}
              />
              {' '}
              <Label check>
                Negotiable
              </Label>
            </FormGroup>
          </FormGroup>
          {/* ======IMAGES====== */}
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