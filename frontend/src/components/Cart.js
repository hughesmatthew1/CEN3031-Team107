import React, { useState } from 'react';
import CartItem from './CartItem.js';

function Cart() {
    // get request to auth

    // if user logged in, return their cart

    // if user not logged in, display "can't check out as guest, please sign in" and a button to navigte to account page
    return(
        <div className="user-cart">
            <h2>Your Cart</h2>
            {<CartItem/>}
            {<CartItem/>}
        </div>        
    );
}

export default Cart;
