import React from 'react';
import Banner from './Banner';
import Deal from './Deal';
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
           <Deal></Deal>
        </div>
    );
};

export default Home;