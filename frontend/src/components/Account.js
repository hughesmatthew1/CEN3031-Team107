import React, { useState, useEffect } from 'react';
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";

function Account() {
    // get request from auth to determine if user signed in (store user var) 

    // If acive user, display name, password (stars), and reward points
    // Allow user to log out

    // If no active user, state reasons to have an ccount
    // display sign in sign up 

    return(
        <section>
            <div>
                <h1 className="page-head">Your account</h1>
                <p>Info and Rewards</p>
            </div>
            <p>If no active user (pull from jwt) allow buttons</p>
            <button type="button" className="button container-fluid signIn-button" data-bs-toggle="modal" data-bs-target="#SignInModal">
                Sign In
            </button>
            {<SignIn/>}
            <button type="button" className="button container-fluid signUp-button" data-bs-toggle="modal" data-bs-target="#SignUpModal">
                Sign Up
            </button>
            {<SignUp/>}
        </section>
    );
}

export default Account;
