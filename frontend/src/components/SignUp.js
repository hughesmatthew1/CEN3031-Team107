import React, { useState } from 'react';

function SignUp({active_user}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) =>{
        e.preventDefault();

        const payload = {
            username: username,
            password: password
        }
        // Signup request (validates new username, returns token of active user)
        await fetch("/user/signup", {
            method: "POST", 
            body: JSON.stringify(payload), 
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(json => {console.log(json); sessionStorage.setItem("active-user", json.token)}) // Sets session to recognize the current user
        .catch(err => {console.error(err)})

        // Force page to reload (brings user to user account page)
        window.location.reload()
    }

    return(
        <div className="modal fade" id="SignUpModal" tabIndex="-1" role="dialog" aria-labelledby="MenuTile" aria-hidden="true">
            <div className="modal-dialog" role="document">s
                <div className="modal-content menu-modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="SignUp">Sign Up</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" justify="right">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        text fields for username and password
                        <form onSubmit={handleSubmit} id="form-signup">
                            <input type="text" id="username-field-signin" value={username} onChange={(e)=>(setUsername(e.target.value))}/>
                            <input type="password" id="password-field-signup" value={password} onChange={(e)=>(setPassword(e.target.value))}/>
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

export default SignUp;
