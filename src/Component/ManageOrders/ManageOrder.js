import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ManageOrder = (props) => {
    const { _id, title, text, img, price } = props.service;
    return (
        <div>
            <Card border="primary" style={{ maxWidth: '30rem' }}>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    <Card.Text>${price}</Card.Text>
                    <Button variant="secondary" className="me-4">Approve</Button>
                    <Button variant="secondary">Delete</Button>
                </Card.Body>
            </Card>
            <br />
        </div>
    );
};

export default ManageOrder;