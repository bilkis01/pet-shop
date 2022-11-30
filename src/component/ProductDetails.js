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
      <div class="card p-24 m-1.5 lg:card-side bg-base-100 shadow-xl">
      <figure><img src={catFood} className="w-auto" alt="Album"/></figure>
      <div class="card-body">
        <h2 class="card-title">New album is released!</h2>
        
        <div class="card-actions justify-start">
          <button class="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
    );
};

export default ProductDetails;