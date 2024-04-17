import React, { useState, useEffect } from 'react';
import AccountGuest from "./AccountGuest.js"
import AccountUser from "./AccountUser.js"

function Account() {
    // get request from auth to determine if user signed in (store user var) 

    // If acive user, display name, password (stars), and reward points
    // Allow user to log out

    // If no active user, state reasons to have an ccount
    // display sign in sign up 


    const [active_user, setUser] = useState('')

    useEffect(()=>{
        setUser(sessionStorage.getItem("active-user"))
        console.log(active_user)
    })

    if(!active_user){
        return(
            <AccountGuest/>
        );
    }
    else{
        return(
            <AccountUser/>
        )
    }
    
}

export default Account;
