import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MyOrder = () => {
    const { myorderId } = useParams();
    // const { title, text } = props.services.myorderId;
    // const [services, setServices] = useState([]);
    // // Data load
    // useEffect(() => {
    //     fetch('./services.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, []);

    return (
        <div>
            <h1 className="bg-white">This is my order page{myorderId}</h1>
        </div>
    );
};

export default MyOrder;