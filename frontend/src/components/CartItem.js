import React, { useState, useEffect } from 'react';



function CartItem({item}) {

    const handleClick = async (e)=>{
        e.preventDefault()

        let cart = JSON.parse(sessionStorage.getItem("user-cart"))

        let i = cart.findIndex(c => c.name==item.name)
        cart.splice(i, 1)
        sessionStorage.setItem("user-cart", JSON.stringify(cart))
        // Set active user to an empty string (no active user)
        window.location.reload()
    }


    return(
        <div className="row cart-item">
            <br></br>
            <div className="col-6 cart-item-name">
                {item.name}
            </div>
            <div className="col-3 cart-item-price">
                ${item.price}
            </div>
            <div className="col-3">
                <button type="button" className="button-logout" onClick={handleClick}>Remove Item</button>
            </div>
            <br></br>
        </div>
    );
}

export default CartItem;
