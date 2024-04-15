import React from 'react';
import CartItem from './CartItem.js';

function Cart() {
    return(
        <div className="user-cart">
            <h2>Your Cart</h2>
            {<CartItem/>}
            {<CartItem/>}
        </div>        
    );
}

export default Cart;
