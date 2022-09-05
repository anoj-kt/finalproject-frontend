import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { Link } from 'react-router-dom';

const initialstate = {
  effectiveDate: Date,
  effectiveDate: "",
  message: "",
  address: {
    street: "",
    postalCode: "",
    city:"",
    country:""
  }
}

const ServiceSendRequest = () => {
  const [newRequest, setNewRequest] = useState(initialstate);

  useEffect(() => {
    fetch('http://localhost:8000/service/:serviceID/request/new') //=====CHANGE URL=====//
    .then((res) => console.log(res))
    .catch(err => console.log(err))
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/testw', { //=====CHANGE URL=====//
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newRequest)
    })
    .then((res) => console.log(res))
    .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    const {name, value} = e.target;

    if(name === 'date') {
      let date = new Date(value);
      setNewRequest({...newRequest, [name]: date});
      return
    }

    if(name === 'street' || name === 'postalCode' || name === 'city' || name === 'country') {
      setNewRequest({
        ...newRequest, 
        address: {
          ...newRequest.address,
          [name]: value
        }
      });
      return
    }

    setNewRequest({...newRequest, [name]: value});
  }

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
          <Form onSubmit={handleSubmit}>
            <Row className="mb-4"> {/* ======DATE AND TIME====== */}
              <Label>When do you need this service?</Label>
              {/* ======DATE====== */}
              <Col sm={12} md={6}>  
              <FormGroup>
                <Label for="effectiveDate">
                  Date
                </Label>
                <Input
                  id="effectiveDate"
                  name="effectiveDate"
                  placeholder=""
                  type="date"
                  required
                  onChange={handleChange}
                />
                </FormGroup>
              </Col>
              {/* ======TIME====== */}
              <Col sm={12} md={6}>
                <FormGroup>
                  <Label for="effectiveTime">
                    Time
                  </Label>
                  <Input
                    id="effectiveTime"
                    name="effectiveTime"
                    placeholder=""
                    type="time"
                    required
                    onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                    onChange={handleChange}
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