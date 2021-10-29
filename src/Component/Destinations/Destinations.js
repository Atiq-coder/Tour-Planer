import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [services, setServices] = useState([]);
    // Data load
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (

        <div className="cards-section container-fluid">
            <h2 className="pt-5 text-center text-white">OUR DESTINATIONS</h2>
            <Row xs={1} md={3} className="g-1">
                {
                    services.map(service => <Destination key={service.id} service={service}></Destination>)
                }
            </Row>
        </div>
    );
};

export default Destinations;