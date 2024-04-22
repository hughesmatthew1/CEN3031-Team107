import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function OrderGuest() {
    // Displays if there is no active user
    // Prompt guest to log in to view their cart and check out

    return(
        <section>
            <h1 className="page-head">Place an order</h1>
                <div className="order-page-body">
                    <div className="order-guest">
                        <p>Must log in to view cart and check out!</p>
                        <Link className="order-navLink" to="/account">Click HERE to log in!</Link>
                    </div>
                </div>
        </section>
    );
}

export default OrderGuest;
