import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Reviews from '../Reviews/Reviews';
import Banner from './../Banner/Banner';
import useTitle from './../../../hooks/useTitle';
import Projects from '../Projects/Projects';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            {/* <AdvertisedProducts></AdvertisedProducts> */}
            {/* <Reviews></Reviews> */}
        </div>
    );
};

export default Home;