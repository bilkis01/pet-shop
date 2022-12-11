import React, { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';
import catFood from './../image/catFood.png'
import Cart from './Cart';


const ProductDetails = () => {


  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([])
  console.log(cart);
  // addToCart
  const addToCart = (selectedProduct) => {
    // console.log(selectedProduct);
    let newCart = []
    const isExits = cart.find(cartItem => cartItem._id === selectedProduct._id)

    if (!isExits) {
      selectedProduct.quantity = 1
      newCart = [...cart, selectedProduct]
    } else {
      const restProducts = cart.filter(cartItem => cartItem._id !== selectedProduct._id)
      selectedProduct.quantity = selectedProduct.quantity + 1
      newCart = [...restProducts, selectedProduct]
    }
    addToLocalStorage(selectedProduct._id)
    setCart(newCart)
  }

  // addToLocalStorage
  const addToLocalStorage = (id) => {
    let shoppingCart = {}

    const exitsCart = JSON.parse(localStorage.getItem('my-shopping-cart'))
    if (exitsCart) {
      shoppingCart = exitsCart
    }
    if (shoppingCart[id]) {
      shoppingCart[id] += 1
    } else {
      shoppingCart[id] = 1
    }

    localStorage.setItem('my-shopping-cart', JSON.stringify(shoppingCart))




  }
  // const x = {name:"xyz",roll:1}
  // let y = 'roll'

  // console.log(x[y]);


  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data))

  }, [id])


  return (
   <div>
    <Cart cart={cart}></Cart>
     <div class="hero min-h-screen ">
      <div class="hero-content flex-col px-14 lg:flex-row">
        <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
        
          <h3 class="text-5xl ">{product.name}</h3>
          <h3 class="text-xl font-bold ">{product.price}</h3>
          <br />

          <hr /><hr /><hr />
          <hr />
          <p class="py-4">{product.details}</p>

          <p className='text-fuchsia-900'> SKU: {product.SKU}</p>
          <p className='text-fuchsia-900'> Tags: {product.Tags}</p>
          <p className='text-fuchsia-900'> Category: {product.category}</p>
          <br />

          <button class="btn btn-secondary" onClick={() => addToCart(product)}>Add to Cart </button>
        </div>
      </div>
    </div>
  
   </div>
  );
};

export default ProductDetails;