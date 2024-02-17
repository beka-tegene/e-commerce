import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import CenterMode from './CenterMode';

const Advertisement = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    };

    return (
        <div className='relative w-full overflow-hidden'>
            <CenterMode />
        </div>
    );
};

export default Advertisement;
