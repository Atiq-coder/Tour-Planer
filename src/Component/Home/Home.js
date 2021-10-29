import React from 'react';
import Adventure from '../Adventure/Adventure';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destinations></Destinations>
            <Adventure></Adventure>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;