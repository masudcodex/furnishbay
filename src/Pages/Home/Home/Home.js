import React from 'react';
import Categories from '../Categories/Categories';
import FeaturedItems from '../FeaturedItems/FeaturedItems';
import HomeBanner from '../HomeBanner/HomeBanner';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <FeaturedItems></FeaturedItems>
            <Categories></Categories>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;