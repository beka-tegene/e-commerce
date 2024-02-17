import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function CenterMode() {
    
    const [advertisementData, setAdvertisementData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.testvalley.kr/main-banner/all');
                const data = await response.json();
                setAdvertisementData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="arrow-prev" onClick={onClick}>
                <FaArrowAltCircleLeft className="absolute z-10 top-[50%] left-[19%] text-[24px] cursor-pointer translate-x-[-50%] translate-y-[-50%]"/>
            </div>
        );
    };

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="arrow-next " onClick={onClick}>
                <FaArrowAltCircleRight className="absolute z-10 top-[50%] right-[20%]  text-[24px] cursor-pointer translate-x-[-50%] translate-y-[-50%]"/>
            </div>
        );
    };
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1.5,
        speed: 500,
        arrows: true, 
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };
   
    return (
        <div className="slider-container">
                <style>
                {`
                    .slick-slide div {
                        width: 95% !important;
                        margin-left: 23rem !important;
                    }
                `}
            </style>
            <Slider {...settings}>
                {advertisementData?.map((item, index) => (
                    <div key={index} className={`bg-[#ededef] h-[40vh] rounded overflow-hidden`}>
                        <img src={item?.pcImageUrl} alt="advertisement" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CenterMode;
