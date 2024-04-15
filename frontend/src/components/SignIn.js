import React, { useState } from 'react';

function SignIn(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log("form submitted");
        const payload = {
            username: username,
            password: password
        }

        await fetch("/user", {
            method: "POST", 
            body: JSON.stringify(payload), 
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(json => {console.log(json)})
        .catch(err => {console.error(err)})
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
                        text fields for username and password
                        <form onSubmit={handleSubmit} id="form-signin">
                            <input type="text" id="username-field-signin" value={username} onChange={(e)=>(setUsername(e.target.value))}/>
                            <input type="password" id="password-field-signin" value={password} onChange={(e)=>(setPassword(e.target.value))}/>
                            <button type="submit" className="btn btn-primary">Submit</button>
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
