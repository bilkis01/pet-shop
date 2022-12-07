import React from 'react';
import Banner from './Banner';
import BestProduct from './BestProduct';
import Blog from './Blog';
import Deal from './Deal';
import Footer from './Footer';
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
           <BestProduct></BestProduct>
           <Blog></Blog>
           <Footer></Footer>
        </div>
    );
};

export default Home;