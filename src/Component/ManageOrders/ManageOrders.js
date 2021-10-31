import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [services, setServices] = useState([]);
    // Data load
    useEffect(() => {
        fetch('https://eerie-demon-25137.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (

        <div className="cards-section container">
            <Row xs={1} md={2} className="d-flex justify-content-center mt-5">
                {
                    services.map(service => <ManageOrder key={service._id} service={service}></ManageOrder>)
                }
            </Row>
        </div>

    );
};

export default ManageOrders;