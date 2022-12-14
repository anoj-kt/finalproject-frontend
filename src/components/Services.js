import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Row, Col } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import React, {Component} from 'react';

function Services() {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
          setIsLoading(true)
            try {
                const res = await fetch('https://farll.herokuapp.com/service/all'); 
                const data = await res.json();
                setServices(data)
              } catch (error) {
                console.log(error)
              }
              setIsLoading(false)
        }
        fetchData()
    }, [])

    const cards = services.map((item) => {
       let path = "/service/"+ item._id;
        return <Col xs={4} key={item._id}>
                    <Card style={{ width: '18rem', marginBottom: '3rem' }}>
                        <Card.Img style={{height: "10rem", objectFit: 'cover'}} variant="top" src={item.imagesList[0].imageURL} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                            € {item.price} {item.priceCalculationType}
                            </Card.Text>
                            <Link to={path}><Button variant="primary">More Details</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
    })

    const spinner = <Col xs={12} style={{ width: '18rem', margin: 'auto', height: '100vh' }} className="justify-content-center">
                      <Spinner animation="border" />
                    </Col>
    
  return (
    <Container className="mt-5 mb-5">
        <Row>
            {isLoading? spinner : cards}
        </Row>
    </Container>
  );
}

export default Services;