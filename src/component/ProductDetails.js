import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import catFood from './../image/catFood.png'
import Menu from './Menu';

const ProductDetails = () => {

    const id = useParams();
    const newId = id?.id;
    const [item, setItem] = useState(Menu);

    console.log(newId)

    return (
      <div class="card p-24 m-1.5 lg:card-side bg-yellow-300 shadow-xl">
      <figure><img src={catFood} className="w-auto" alt="Album"/></figure>
      <div class="card-body">
        <h2 class="text-fuchsia-700">New album is released!</h2>
        
        <div class="card-actions justify-center">
          <button class="btn btn-primary text-white">Listen</button>
        </div>
      </div>
    </div>
    );
};

export default ProductDetails;