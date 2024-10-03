import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import axios from 'axios';

const FreeBook = () => {
    const [book, setBook] = useState([]);
    const getBook = async (req, res) => {
        try {
            const booklist = await axios.get('https://bookstore-copy-api.vercel.app/book');
            setBook(booklist.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getBook();
    }, [])



    const filterData = book.filter((data) => data.category === 'Free');
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className=" my-8 md:my-20 container space-y-6  max-w-screen-2xl mx-auto md:px-20 px-4">
            <div>
                <h1 className="font-bold text-2xl my-4">Free Offered Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, in id numquam possimus doloribus ipsum, labore asperiores soluta dolor inventore quod ratione. Necessitatibus sapiente tempore veniam suscipit repellendus ad assumenda.</p>
            </div>
            <div className="w-full  ">
                <Slider {...settings}>
                    {filterData.map((item) => <Card key={item.id} item={item} />)}
                </Slider>
            </div>
        </div>
    )
}

export default FreeBook