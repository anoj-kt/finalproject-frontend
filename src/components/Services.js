import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Services() {

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:8000/service/all'); 
                const data = await res.json();
                console.log(data)
              } catch (error) {
                console.log(error)
              }
        }
        fetchData()
    }, [])
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Services;