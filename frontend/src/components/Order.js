import React, {useState, useEffect} from 'react';
import OrderUser from './OrderUser';
import OrderGuest from './OrderGuest';

function Order() {

    // Verify a user is logged in
    // If not logged in, tell user to log in to view their cart & checkout
    // If logged in, present cart, allow user to check out

    const [active_user, setUser] = useState('')

    useEffect(()=>{
        setUser(sessionStorage.getItem("active-user"))
        console.log(active_user)
    })

    if(!active_user){
        return(
            <OrderGuest/>
        )
    } else{
        return(
            <OrderUser/>
        )
    }

}

export default Order;
