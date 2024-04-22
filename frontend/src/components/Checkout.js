import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Checkout() {
    // Populate cart array with menu item objects
    // Populate user with active user's object
    // Display the order's contents, and its price in dollars and reward points
    // Allow user to select to pay with card / reward points
    // Card -> add reward points to user acct
    // RP -> subtract reward points from user account

    // Allows navigation from written functions
    const navigate = useNavigate()

    // Initialize cart and user
    useEffect(()=>{
        setCart(JSON.parse(sessionStorage.getItem("user-cart")))
        fetchUser()
    }, [])

    // Use State to repopulate the cart and user objects
    const [cart, setCart] = useState([])
    const [user, setUser] = useState({})

    // Get active user's object (upon opening checkout page)
    const fetchUser = async () => {
        const activeUser = await fetch("/auth", 
            {
                method: "GET",
                headers:{'Content-Type': 'application/json', "x-auth-token": sessionStorage.getItem("active-user")}
            })
        const data = await activeUser.json()

        setUser(data);
    }

    // Initialize information about the order
    var costD= 0
    var costRP = 0
    var addedRP = 0

    if (cart.length !== 0){
        cart.forEach((item)=>{
            costD += item.price
            costRP += item.rewardsPointsCOST
            addedRP += item.rewardsPointsADD
        })
    }

    // Handle Checkout with card Button
    const handleClickCard = async (e)=>{
        e.preventDefault()
        
        await fetchAddRP()

        successCheckout()

    }

    // Add Reward Points to a user's object in DB (when paying with card)
    const fetchAddRP = async () => {
        let newRP = user.rewardPoints + addedRP
        await fetch("/user/" + user.id,
        {
            method: "PATCH",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({"rewardPoints": newRP})
        })
    }

    // Handle Checkout with RP button
    const handleClickRP = async (e)=>{
        e.preventDefault()

        if (user.rewardPoints < costRP){
            // Handle it
            console.log("Not enough Reward Points")
        }
        else {
            await fetchSubRP()

            successCheckout()
        }
    }

    // Remove Reward Points from a user's object in DB

    const fetchSubRP = async () => {
        let newRP = user.rewardPoints-costRP
        await fetch("/user/" + user.id,
        {
            method: "PATCH",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({"rewardPoints": newRP})
        })
    }

    // Resets Cart to empty, navigates to confirmation page
    function successCheckout(){
        sessionStorage.setItem("user-cart", JSON.stringify([]))

        navigate("/checkoutconfirmation")
    }
    
    return(
        <div>
            <h1 className="page-head">Welcome to Wake'N'Bake</h1>
            <div className="checkout-body">
                <div className="checkout-display">
                    <div className="row">
                        <div className="col-6">
                            <div>Cost in $: ${costD}</div>
                            <div>RP added: {addedRP}</div>
                            <button className="checkout-pay-button" onClick={handleClickCard}>Pay with Card</button>
                        </div>
                        <div className="col-6">
                            <div>Reward Points Available: </div>
                            <div>Cost in RP: {costRP}</div>
                            <button className="checkout-pay-button" onClick={handleClickRP}>Pay with Reward Points</button>
                        </div>
                    </div>
                    <div>
                        <Link className="order-navLink" to="/order">Edit your Order</Link>
                    </div>
                </div>
            </div>
        </div>        
    );
}

export default Checkout;
