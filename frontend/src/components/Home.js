import React from 'react';
import { Link } from 'react-router-dom';



function Home() {
    return(
        <div>
            <h1 class="page-head">Welcome to Wake'N'Bake</h1>
            <div class="logo-image"></div>
            <p class="page-head">
                You got the munchies? <br></br>You're in the right place
            </p>
            {/* Featured Items, Link to Menu */}
            <div class="row home-featured-row">
                <h2 class="home-subhead">
                    Featured Items
                </h2>
                <div class="col-4 item-1">
                    <h3>
                        Item 1
                    </h3>
                </div>
                <div class="col-4 item-2">
                    <h3>
                        Item 2
                    </h3>
                </div>
                <div class="col-4 item-3">
                    <h3>
                        Item 3
                    </h3>
                </div>
                <Link class="navLink" to="/menu">Click HERE to view our menu!</Link>
            </div>
            {/* Highlight Rewards Program, incentive to sign in / sign up */}
            <div class="row home-rewards-other-row">
                
                <div class="col-6 reward-col">
                    <h2 class="home-subhead">
                        Rewards Program
                    </h2>
                    Here at Wake'N'Bake, we value our loyal customers, and want to give back. 
                    <br></br> 
                    Please sign in or sign up at the link to the right.
                    <br></br>
                    Upon signing in, you will be able to place orders, and accrue rewards on each purchase!
                    <br></br>
                    <Link class="navLink" to="/account">Proceed to Log-In</Link>
                </div>
                <div class="col-6">
                    Other Home Page Stuff
                </div>
            </div>
        </div>        
    );
}

export default Home;
