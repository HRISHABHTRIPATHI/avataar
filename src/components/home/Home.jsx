import { Fragment } from "react";
import React from 'react';
import Carousel from './Carousel';

//components
import NavBar from "./NavBar";


const items = [
    { imageUrl: 'https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50' },
    { imageUrl: 'https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50' },
    { imageUrl: 'https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50' },
    { imageUrl: 'https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50' }
    // Add more items as needed
];


const Home = () => {
    return (
        <Fragment>
            <NavBar/>
            <Carousel items={items} />
        </Fragment>
    )
}

export default Home;
