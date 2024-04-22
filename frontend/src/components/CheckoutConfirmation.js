import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CheckoutConfirmation() {
    // Reset cart to empty
    // Update User points
    // Display receipt (and updated point total)
    // Allow for feedback
    // Direct user to home page

    return (
        <div className="conf-page">
            <h1 classname="page-header">Checkout Successful</h1>
            <div className="conf-body">
                <div>Thank you for Shopping With Us!</div>
                <br></br>
                <div>Please leave feedback to improve your future Wake'N'Bake experiences</div>
                <form id="form-feedback">
                    <input type="text" id="feedback-field-signin"/>
                </form>
                <br></br>
                <Link class="order-navLink" to="/account">Click to return to Account Page</Link>
                <br></br>
                <Link class="order-navLink" to="/menu">Click to return to Menu Page</Link>
            </div>
        </div>
    )
}

export default CheckoutConfirmation
