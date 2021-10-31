import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddDestination.css';

const AddDestination = () => {
    const imgRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();

    //Handle Add Destination
    const handleAddDestination = e => {
        const title = titleRef.current.value;
        const text = descriptionRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;

        const NewDestination = { title, text, price, img };

        //Post Destination
        fetch('https://eerie-demon-25137.herokuapp.com/destinations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(NewDestination)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Destination add Successful');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="add-destination">
            <div className="w-50">
                {/* Add product form */}
                <Form onSubmit={handleAddDestination}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Destination Title</Form.Label>
                        <Form.Control ref={titleRef} type="text" required placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control ref={priceRef} type="number" required placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control ref={imgRef} type="text" required placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionRef} required as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Add Destination
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddDestination;