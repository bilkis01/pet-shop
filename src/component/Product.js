import React, { useEffect, useState } from 'react';
import FilterProduct from './FilterProduct';
import './Navbar.css';
import ProductCard from './ProductCard';

const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            <div className='heading '>
                <h4 className='text-primary font-bold'>BEST PRODUCT</h4>
                <h1 className='text-black'>New Collection</h1>

            </div>
            <FilterProduct></FilterProduct> <br /> <br />

            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-24'>

                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }


            </div>

        </div>
    );
};

export default Product;