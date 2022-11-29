import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Slider from "react-slick";
import AdsCard from './AdsCard';
function Ads() {

    const [prodcuts, setProducts] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/adsProduct`)
            .then(res => setProducts(res.data))
    }, [])

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
    };
    return (
        <div className={`${prodcuts.length === 0 ? 'hidden' : 'block'} sm:w-[32rem]  mx-auto`}>
            <Slider {...settings}>
                {
                    prodcuts.map((product, index) => {
                        return (
                            <div>
                                <AdsCard key={index} product={product} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>



    )
}

export default Ads