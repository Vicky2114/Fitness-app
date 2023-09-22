import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "../item"
import "../assets/css/Slider.css"
import lawyer from "../assets/images/lawyer.svg"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Slider = () => {
    const reviewData = [
        {
            image: lawyer,
            name: "Sh.Ajeet Kumar",
            destination: "District & Sessions Judge",
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, voluptates amet facilis error expedita deleniti? Voluptatibus, aspernatur. Veniam placeat eos officia nihil beatae totam possimus ex enim obcaeca"
        },

        {
            image: lawyer,
            name: "Sh.Ajeet Kumar",
            destination: "District & Sessions Judge",
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, voluptates amet facilis error expedita deleniti? Voluptatibus, aspernatur. Veniam placeat eos officia nihil beatae totam possimus ex enim obcaeca"
        },

        {
            image: lawyer,
            name: "Sh.Ajeet Kumar",
            destination: "District & Sessions Judge",
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, voluptates amet facilis error expedita deleniti? Voluptatibus, aspernatur. Veniam placeat eos officia nihil beatae totam possimus ex enim obcaeca"
        },

        {
            image: lawyer,
            name: "Sh.Ajeet Kumar",
            destination: "District & Sessions Judge",
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, voluptates amet facilis error expedita deleniti? Voluptatibus, aspernatur. Veniam placeat eos officia nihil beatae totam possimus ex enim obcaeca"
        },

        {
            image: lawyer,
            name: "Sh.Ajeet Kumar",
            destination: "District & Sessions Judge",
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, voluptates amet facilis error expedita deleniti? Voluptatibus, aspernatur. Veniam placeat eos officia nihil beatae totam possimus ex enim obcaeca"
        },

        {
            image: lawyer,
            name: "Sh.Ajeet Kumar",
            destination: "District & Sessions Judge",
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, voluptates amet facilis error expedita deleniti? Voluptatibus, aspernatur. Veniam placeat eos officia nihil beatae totam possimus ex enim obcaeca"
        },

        {
            image: lawyer,
            name: "Sh.Ajeet Kumar",
            destination: "District & Sessions Judge",
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, voluptates amet facilis error expedita deleniti? Voluptatibus, aspernatur. Veniam placeat eos officia nihil beatae totam possimus ex enim obcaeca"
        },

        {
            image: lawyer,
            name: "Sh.Ajeet Kumar",
            destination: "District & Sessions Judge",
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, voluptates amet facilis error expedita deleniti? Voluptatibus, aspernatur. Veniam placeat eos officia nihil beatae totam possimus ex enim obcaeca"
        },
    ];

    return (
        <>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    {
                        reviewData.map((val) => {
                            return (
                                <Item>
                                    <div>
                                        <div className="flexSlide">
                                            <img src={val.image} alt="review" className="sliderImage" />
                                            <div>
                                                <span><h4>{val.name}</h4></span>
                                                <div>{val.destination}</div>
                                                <i className="fa-solid fa-star star"></i>
                                                <i className="fa-solid fa-star star"></i>
                                                <i className="fa-solid fa-star star"></i>
                                                <i className="fa-solid fa-star star"></i>
                                                <i className="fa-solid fa-star star"></i>
                                            </div>
                                        </div>
                                        <div>{val.review}</div>

                                    </div>
                                </Item>
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    );
}

export default Slider;