import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function SignIn(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()


    const handleSubmit = async (e) =>{
        e.preventDefault();

        const payload = {
            username: username,
            password: password
        }
        // Login request (validate username and password, return token of user)

        await fetch("/user/login", {
            method: "POST", 
            body: JSON.stringify(payload), 
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(json => {console.log(json); sessionStorage.setItem("active-user", json.token)}) // Sets session to recognize active user
        .catch(err => {console.error(err)})

        // Navigate to login confirmation page 
        navigate("/authconfirmation")

    }

    return(
        <div className="modal fade" id="SignInModal" tabIndex="-1" role="dialog" aria-labelledby="MenuTile" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content menu-modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="SignUp">Sign In</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" justify="right">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Fill out the following form to log into an existing account.
                        <form onSubmit={handleSubmit} id="form-signin">
                            <input type="text" id="username-field-signin" value={username} onChange={(e)=>(setUsername(e.target.value))} placeholder="USERNAME"/>
                            <input type="password" id="password-field-signin" value={password} onChange={(e)=>(setPassword(e.target.value))} placeholder="PASSWORD"/>
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default SignIn;
