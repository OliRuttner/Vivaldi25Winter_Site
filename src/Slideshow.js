import React, { useState, useEffect } from 'react';

const Slideshow = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [images, interval]);

    return (
        <div className="slideshow">
            <img
                className="slideshow-image"
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
            />
        </div>
    );
};

export default Slideshow;