import React, { useState, useEffect } from 'react';
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";

function AccountGuest() {
    // Displays if there is no active user
    // Allows nonuser to signup / signin

    return(
        <section>
            <h1 className="page-head">Sign in or Sign Up</h1>
            <div>
                <div className="account-page-body">
                    <div className="account-display">
                        <p>In order to place an order and accrue rewards, you must log in.</p>
                        <button type="button" className="button container-fluid signIn-button" data-bs-toggle="modal" data-bs-target="#SignInModal">
                            Sign In
                        </button>
                        {<SignIn/>}
                        <button type="button" className="button container-fluid signUp-button" data-bs-toggle="modal" data-bs-target="#SignUpModal">
                            Sign Up
                        </button>
                        {<SignUp/>} 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AccountGuest;
