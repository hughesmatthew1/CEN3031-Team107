import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import CartItem from './CartItem.js';

function Cart() {
    // Pull user-cart from session Storage, populate cart with each item in the cart

    const [cart, setCart] = useState([])

    useEffect(()=>{
        setCart(JSON.parse(sessionStorage.getItem("user-cart")))
    }, [])

    
    if (cart.length !== 0){
        return(
            <div className="user-cart">
                {cart.map(item => (
                    <div key={item.id}>
                        {<CartItem item={item} key={item.id}/>}
                    </div>
                ))}
                <div>
                    <Link className="order-navLink" to="/checkout">Proceed to Checkout!</Link>
                </div>
            </div>   
                 
        );
    }
    
    else {
        return(
            <div className="user-cart">
                <h1>Cart Empty</h1>
                <Link className="order-navLink" to="/menu">Click HERE to view our Menu!</Link>
            </div>
        )
    }

}

export default Cart;
