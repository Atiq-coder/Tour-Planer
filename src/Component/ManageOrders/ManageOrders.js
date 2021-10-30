import React, { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
    const [services, setServices] = useState([]);
    // Data load
    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (

        <div className="cards-section container">
            <Row xs={1} md={2} className="d-flex justify-content-center bg-dark">
                {
                    services.map(service => <ManageOrder key={service._id} service={service}></ManageOrder>)
                }
            </Row>
        </div>

    );
};

export default ManageOrders;