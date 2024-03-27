import React from 'react';
import Cart from './Cart';

function Order() {
    return(
        <section>
            <div>
                <h1 class="page-head">Place an order</h1>
                <p>Query if user is logged in w jwt</p>
                <p>If not logged in, say log in to add items to cart, provide link to account page</p>
                <p>If logged in, display cart</p>
                {<Cart/>}
            </div>
        </section>
        // Order page html
    );
}

export default Order;
