import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import GalleryImg from '../GalleryImg/GalleryImg';

const Gallery = () => {
    const [services, setServices] = useState([]);
    // Data load
    useEffect(() => {
        fetch('https://eerie-demon-25137.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (

        <div className="cards-section container-fluid">
            <p className="pt-5 text-center text-white">GALLERY</p>
            <h2 className="pb-4 text-center text-white">We Record Memories</h2>
            <Row xs={1} md={3}>
                {
                    services.map(service => <GalleryImg key={service._id} service={service}></GalleryImg>)
                }
            </Row>
        </div>
    );
};

export default Gallery;