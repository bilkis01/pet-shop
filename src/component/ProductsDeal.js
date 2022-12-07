import React from 'react';
import './Navbar.css';
import small from './../image/small.png';
import baby from './../image/baby.png';

const ProductsDeal = () => {
    return (
        <div className='purple '>
            <img src={small} className="purple-img" alt="" />
            <div className='text-center'>
                <p className='text-yellow-400 py-5 text-one'>SAVE 50% OFF</p>
                <p className='text-two'>BEST DEAL OFFER</p>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime a cumque magnam fugit tempore soluta.</p>

                <br />
                <button className='btn btn-secondary text-black fw-bold'> Shop Now</button>
            </div>

            <img className='cat-img' src={baby} alt="" />

        </div>
    );
};

export default ProductsDeal;