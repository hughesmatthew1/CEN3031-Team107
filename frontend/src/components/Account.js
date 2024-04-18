import React, { useState, useEffect } from 'react';
import AccountGuest from "./AccountGuest.js"
import AccountUser from "./AccountUser.js"

function Account() {
    // Check whether there is an active user (session storage)

    const [active_user, setUser] = useState('')

    useEffect(()=>{
        setUser(sessionStorage.getItem("active-user"))
    }, [])

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
