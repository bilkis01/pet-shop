import React from 'react';
import Banner from './Banner';
import Pet from './Pet';
import PetOff from './PetOff';
import Product from './Product';
import ProductsDeal from './ProductsDeal';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Pet></Pet>
           <PetOff></PetOff>
           <Product></Product>
           <ProductsDeal></ProductsDeal>
        </div>
    );
};

export default Home;