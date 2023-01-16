import React from 'react';
import FeaturedCard from './FeaturedCard';
import car from './../image/car.png'
import card from './../image/card.png'
import box from './../image/box.png'
import headphon from './../image/headphon.png'

import Footer from './Footer';

const Featured = () => {
    return (
       <div>
         <div className=' py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  px-24'>
            <FeaturedCard img={car} text={'Free Shipping'} pera={'Capped at $39 per order'}></FeaturedCard>
            <FeaturedCard img={card} text={'Card Payments'} pera={'12 Months Installments'}></FeaturedCard>
            <FeaturedCard img={box} text={'Easy Returns'} pera={'Shop With Confidence'}></FeaturedCard>
            <FeaturedCard img={headphon} text={'Free Shipping24/7 '} pera={'Contact 24 hours everyday'}></FeaturedCard>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Featured;