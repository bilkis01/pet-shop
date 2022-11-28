import React from 'react';
import slider from '../../src/image/slider.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-primary">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={slider} class="max-w-lg rounded-lg  shadow-6xl" />
          <div>
            <h4 class='text-secondary font-bold'>Up to 40% off</h4>
            <h1 class="text-6xl text-white font-bold">A Great Meal</h1>
            <h1 class="text-6xl text-white font-bold">With Your Pet</h1>
            <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi 
             In deleniti eaque aut repudiandae et a id nisi.  In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-secondary text-black font-bold" >Shop Now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;