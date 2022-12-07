import React from 'react';
import './Navbar.css';
import lemb from './../image/lemb.png'

const BestProduct = () => {
    return (
        
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={lemb}  class="max-w-lgrounded-lg " />
                    <div>
                    <p className='text-primary tracking-wider'>BEST PRODUCT</p>
                        <h1 class="text-5xl font-bold">Best Pet Food</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        </p>

                        <p>
                        Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata non proident, sunt in culpa qui officia deserun mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.
                        </p>
                        <br /><br />
                        <button class="btn btn-secondary">SHOP NOW</button>
                    </div>
                </div>
            </div>
       
    );
};

export default BestProduct;