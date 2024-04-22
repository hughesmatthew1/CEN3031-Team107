import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Cart from "./Cart"

function OrderUser() {
    // Displayed if a user is logged in already
    // Displays user cart
    // Allows user to proceed to checkout

    return(
        <section>
            <h1 className="page-head">Place an order</h1>
                <div className="order-page-body">
                    <h2 className="order-header">Your Cart</h2>
                    {<Cart/>}
                </div>
        </section>
    );
}

export default OrderUser;
