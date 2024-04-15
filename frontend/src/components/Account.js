import React from 'react';
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";

function Account() {
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
