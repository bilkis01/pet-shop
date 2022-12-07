import React, { useEffect, useState } from 'react';
import './Navbar.css';
import ProductCard from './ProductCard';
import Menu from './Menu';

const Product = () => {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);



    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    // console.log(products);
    
    const filterItem = (cateItem) => {
        const updateItem = products.filter((curElem) => {

            return curElem.category === cateItem


        });
        cateItem === 'all' ? setCategory(products) : setCategory(updateItem)

        //  console.log(updateItem);

    }

    return (
        <div>
            <div className='heading '>
                <h4 className='text-primary tracking-wider'>BEST PRODUCT</h4>
                <h1 className=''>New Collection</h1>

            </div>


            <div className='filter-btns'>
                <button className='active-btn filter-btn ' onClick={() => filterItem('all')}>All</button>
                <button className=' filter-btn' onClick={() => filterItem('new')}>New</button>
                <button className=' filter-btn' onClick={() => filterItem('bestseller')}>Best Sellers</button>
                <button className=' filter-btn' onClick={() => filterItem('featured')}>Featured</button>
                <button className=' filter-btn' onClick={() => filterItem('onSell')}>On Sell</button>
            </div>


            <br /><br />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-24'>

                {
                    category.length ? category.map(product => {
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                            >
                            </ProductCard>
                        )
                    }) : products.map(product => {
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                            >
                            </ProductCard>
                        )
                    })
                }



            </div>

        </div>
    );
};

export default Product;