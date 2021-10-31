import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [services, setServices] = useState([]);
    // Data load
    useEffect(() => {
        fetch('https://eerie-demon-25137.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (

        <div className="cards-section container">
            <Row xs={1} md={2} className="d-flex justify-content-center bg-dark">
                {
                    services.map(service => <MyOrder key={service._id} service={service}></MyOrder>)
                }
            </Row>
        </div>

    );
};

export default MyOrders;