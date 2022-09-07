import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { Link, useParams } from 'react-router-dom';
import user from '../assets/images/user.png'

const ServiceDetails = () => {
    const [data, setData] = useState({
        title: "",
        description: "",
        price: "",
        priceCalculationType: "",
        street: "",
        postalCode: "",
        city: "",
        country: "",
        telephone: "",
        imagesList: [""]
    })

    let { serviceId } = useParams();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch(`https://farll.herokuapp.com/service/${serviceId}`); 
                const resData = await res.json();
                if(resData) {
                    const data = resData[0]
                    if(data.priceCalculationType === 'per_hour') {
                        data.priceCalculationType = 'per hour'
                    }
                    if(data.priceCalculationType === 'per_squared_meter') {
                        data.priceCalculationType = 'per square meter'
                    }
                    const createdDate = new Date(data.createdAt);
                    setData({
                        title: data.title,
                        description: data.description,
                        price: data.price,
                        priceCalculationType: data.priceCalculationType,
                        street: data.address.street,
                        postalCode: data.address.postalCode,
                        city: data.address.city,
                        country: data.address.country,
                        telephone: data.telephone,
                        createdAt: createdDate,
                        imagesList: data.imagesList.map((object) => {
                            return object.imageURL
                        })
                    })
                }
              } catch (error) {
                console.log(error)
              }
        }
        fetchData()
    })

    const carouselItems = data?.imagesList.map((img, i) => {
        return (
            <Carousel.Item key={i}>
                <img
                className="d-block w-100 service__carousel-image"
                src={img}
                alt={`Slide ${i}`}
                />
            </Carousel.Item>
        )
    })
    

    return (
        <Container className="mb-4 mt-4">
            {/* ======TITLE====== */}
            <Row className="justify-content-center mb-2">
                <Col md={10}>
                    <h3>{data.title}</h3>
                </Col>
            </Row>
            {/* ======LOCATION AND RATING====== */}
            <Row className="mb-3">
                <Col className="d-flex justify-content-between mb-3" md={{offset: 1, span: 6}}>
                    <div className="service__location">
                        <i class="uil uil-map-marker icon"></i>
                        <h6>{data.city}, {data.country}</h6>
                    </div>
                    <div>
                        {/* Overall score */}
                    </div>
                </Col>
            </Row>
            {/* ======IMAGES, DETAILS AND SEND REQUEST BUTTON====== */}
            <Row className="justify-content-center mb-3">
                {/* ======IMAGES CAROUSEL====== */}
                <Col sm={12} md={6} className="mb-3">
                    <Carousel fade className="service__carousel">
                        {carouselItems}
                    </Carousel>
                </Col>
                {/* ======DETAILS AND SEND REQ====== */}
                <Col sm={12} md={4}>
                    <div className="service__details service-border">
                        <h5 style={{borderBottom: "1px solid var(--main-grey)"}}>Details</h5>
                        <div className="service__details-content">
                            <i class="uil uil-user-check icon-green"></i>
                            <p>Member since {("0" + data.createdAt?.getDate()).slice(-2)}.{("0" + (data.createdAt?.getMonth() + 1)).slice(-2)}.{data.createdAt?.getFullYear()}</p>
                        </div>
                        <div className="service__details-content">
                            <i class="uil uil-phone icon-green"></i>
                            <p>{data.telephone}</p>
                        </div>
                        <div className="service__details-content">
                            <i class="uil uil-map-marker icon-green"></i>
                            <div>
                                <p>{data.street}</p>
                                <p>{data.city}</p>
                                <p>{data.country}</p>
                            </div>
                        </div>
                    </div>
                    <Link to="./request/new" style={{textDecoration: 'none'}}>
                        <button className="button service__request-btn">
                            Send request
                        </button>
                    </Link>
                </Col>
            </Row>
            {/* ======PRICE====== */}
            <Row className="justify-content-center mb-3">
                <Col sm={12} md={10}>
                <div className="newrequest__price">
                    <h3 className="newrequest__price-value">€{data.price}</h3>
                    <p className="newrequest__price-type">{data.priceCalculationType}</p>
                </div>
                </Col>
            </Row>
            {/* ======DESCRIPTION====== */}
            <Row className="justify-content-center mb-3">
                <Col sm={12} md={10}>
                    <div className="service__description service-border">
                        <h5 style={{borderBottom: "1px solid var(--main-grey)"}}>Description</h5>
                        <p>{data.description}</p>
                    </div>
                </Col>
            </Row>
            {/* ======REVIEWS====== */}
            {/* <Row className="justify-content-center mb-3">
                <Col sm={12} md={10}>
                    <div className="service__reviews service-border">
                        <h5 style={{borderBottom: "1px solid var(--main-grey)"}}>Reviews</h5>
                        <div className="service__review">
                            <img className="service__review-image" src={user} alt="user image" />
                            <h6 className="service__review-user">John Doe</h6>
                            <p className="service__review-comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eveniet.</p>
                            <div className="service__review-score">
                                Score
                            </div>
                        </div>
                    </div>
                </Col>
            </Row> */}
        </Container>
    )
}

export default ServiceDetails