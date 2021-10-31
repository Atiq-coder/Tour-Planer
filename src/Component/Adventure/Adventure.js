import React from 'react';
import './Adventure.css';

const Adventure = () => {
    return (
        <div className="adventure-section">
            <div className="text-center p-5 text-white">
                <h6 className="pt-5">START YOUR ADVENTURE</h6>
                <h1>Let's Explore This World</h1>
                <p>There are many beautiful places on this earth that you should visit. Whether you are a nature lover and enjoy outdoor activities, you prefer to indulge in a museum, or you want to experience the special atmosphere in an unknown country.</p>
                <button className="mb-5 btn border text-white">Book Now</button>
            </div>
        </div>
    );
};

export default Adventure;