import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const consumedServiceList = () => {





  return (
    <Container fluid className="requestd_container">
    <div className='requestd__content'>
        <h2>Consumed Service History </h2>
        <Col md={5}><hr></hr></Col>
      <div className="requestd__flex">
      <div className='requestd__status'> 
        <Link to="/user/:userid/profile"style={{textDecoration: 'none', color: 'var(--main)'}}>
         <p className='requestp__hover'>WebDesign</p>
        </Link>
        <p>15.08.2022</p>
        <p>Status</p>
      </div>
      <div className="requestd__moreinfo">
        <Link to="/user/:userId/services/provided/:serviceId/requests/:requestId"style={{textDecoration: 'none', color: 'var(--main)'}}>
          <p className='requestp__hover'>More Info</p>
        </Link>
      </div>
      </div>
    </div>
    
  </Container>
  )
}

export default consumedServiceList