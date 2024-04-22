import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AuthConfirmation() {
    // Verify that login worked
    // Direct to Account page

    if (sessionStorage.getItem("active-user") == "undefined"){
        return(
            <div className="conf-page">
                <h1 classname="page-header">Log in Unsuccessful</h1>
                <div className="conf-body">
                    <div>Possible Causes:</div>
                    <br></br>
                    <div>1. Existing username given in sign up attempt</div>
                    <div>2. Invalid Password given in sign up attempt</div>
                    <div>3. Invalid Username given in a sign in attempt</div>
                    <div>4. Incorrect Password given in a sign in attempt</div>
                    <br></br>
                    <div>Return to Account Page to try again</div>
                    <br></br>
                    <Link class="order-navLink" to="/account">Click here to return to Account Page</Link>
                </div>
            </div>
        )

    }

    return(
        <div className="conf-page">
            <h1 classname="page-header">Log in Successful</h1>
            <div className="conf-body">
                <div>Welcome to Wake'N'Bake!</div>
                <br></br>
                <div>Now that you are logged in, you can get shopping!</div>
                <br></br>
                <div>Return to Account Page to view your information.</div>
                <br></br>
                <Link class="order-navLink" to="/account">Click here to return to Account Page</Link>
            </div>
        </div>
        
    )
}

export default AuthConfirmation
