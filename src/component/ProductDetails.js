import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import catFood from './../image/catFood.png'


const ProductDetails = () => {

    const {id} = useParams();
   
    const [product, setProduct] = useState({});


    useEffect(()=>{
      const url  =`http://localhost:5000/product/${id}`;

      fetch(url)
      .then(res=>res.json())
      .then(data=>setProduct(data))

    },[id])

   

    return (
      <div class="hero min-h-screen ">
      <div class="hero-content flex-col px-14 lg:flex-row">
        <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h3 class="text-5xl ">{product.name}</h3>
          <h3 class="text-xl font-bold ">{product.price}</h3>
          <br />
          
          <hr/><hr /><hr />
          <hr/>
          <p class="py-4">{product.details}</p>

         <p className='text-fuchsia-900'> SKU: {product.SKU}</p> 
         <p className='text-fuchsia-900'> Tags: {product.Tags}</p> 
         <p className='text-fuchsia-900'> Category: {product.category}</p> 
         <br />
      
          <button class="btn btn-secondary">Add to Cart </button>
        </div>
      </div>
    </div>
    );
};

export default ProductDetails;