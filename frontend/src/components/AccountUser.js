import React, { useState, useEffect } from 'react';

function AccountUser() {
    // Displayed if a user is logged in already
    // Displays user data (username, reward points)
    // Allows user to log out (remove active-user from session data)

    const [active_user, setUser] = useState([])

    useEffect(()=>{
        fetchUser()
    }, [])

    const fetchUser = async () => {
        const user = await fetch("/auth", 
            {
                method: "GET",
                headers:{'Content-Type': 'application/json', "x-auth-token": sessionStorage.getItem("active-user")}
            })
        const data = await user.json()
        setUser(data);
    }
    
    const handleClick = async (e)=>{
        e.preventDefault()

        // Set active user to an empty string (no active user)
        sessionStorage.setItem("active-user", "")
        window.location.reload()
    }


    return(
        <section>
            <div>
                <h1 className="page-head">Your account</h1>
                <div className="account-page-body">
                    <h2 className="account-header">Account Information</h2>
                    <div className="account-display">
                        <div className="row justify-content-center">
                            <div className="col-2">Username: </div>
                            <div className="col-2">{active_user.username}</div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-2">Reward Points: </div>
                            <div className="col-2">{active_user.rewardPoints}</div>
                        </div>
                        <button type="button" className="button-logout" onClick={handleClick}>Log Out</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AccountUser;
