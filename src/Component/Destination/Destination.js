import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Destination = (props) => {
    const { title, text, img, price } = props.service;
    return (
        <div>
            {/* Product card */}
            <Col className="p-4 product-card">
                <Card className="bg-dark text-white">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{text}</Card.Text>
                        <Card.Text><strong>Price: ${price}</strong></Card.Text>
                        <Link to="/shipment"><Button variant="secondary">Book Now</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Destination;