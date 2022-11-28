import React from 'react';
import Banner from './Banner';
import Pet from './Pet';
import PetOff from './PetOff';
import Product from './Product';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Pet></Pet>
           <PetOff></PetOff>
           <Product></Product>
        </div>
    );
};

export default Home;