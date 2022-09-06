import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Services() {
    const [services, setServices] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:8000/service/all'); 
                const data = await res.json();
                setServices(data)
              } catch (error) {
                console.log(error)
              }
        }
        fetchData()
    }, [])

    const cards = services?.map((item) => {
       let path = "/service/"+ item._id;
        return <Col xs={4} key={item._id}>
                    <Card style={{ width: '18rem' }}>
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
    
  return (
    <Container className="mt-5 mb-5">
        <Row>
            {cards}
        </Row>
    </Container>
  );
}

export default Services;