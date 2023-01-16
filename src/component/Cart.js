import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            {
                cart.map((cartItem => {
                    return (
                        <div>
                            <img src={cartItem.image} alt="" />
                            <span>{cartItem.name}</span>
                            <span>{cartItem.price}</span>
                            <button>-</button>
                            <span>{cartItem.quantity}</span>
                            <button>+</button>
                            <span>{cartItem.category}</span>
                        </div>
                    )
                }))
            }
        </div>
    );
};

export default Cart;