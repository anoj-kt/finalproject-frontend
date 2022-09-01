import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'

const CreateAd = () => {
  return (
    <Container className="form__container">
      <Row className="justify-content-center">
        <Col lg={{ span: 6}}>
        <h4>Create your advertisement</h4>
        <Form>
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