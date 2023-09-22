import React from 'react'
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const TopNews = () => {
    const news = [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate earum cupiditate quo omnis! Repellat sunt assumenda porro, praesentium ducimus dignissimos.",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate earum cupiditate quo omnis! Repellat sunt assumenda porro, praesentium ducimus dignissimos.",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate earum cupiditate quo omnis! Repellat sunt assumenda porro, praesentium ducimus dignissimos.",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate earum cupiditate quo omnis! Repellat sunt assumenda porro, praesentium ducimus dignissimos.",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate earum cupiditate quo omnis! Repellat sunt assumenda porro, praesentium ducimus dignissimos.",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate earum cupiditate quo omnis! Repellat sunt assumenda porro, praesentium ducimus dignissimos.",

    ]
    return (
        <>
            <div className="App">
                <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1500}>
                    {
                        news.map((val) => {
                            return (
                                <div>{val}</div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    )
}

export default TopNews
