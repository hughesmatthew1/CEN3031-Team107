import React from 'react';
import { Link } from 'react-router-dom';



function Home() {
    return(
        <div>
            <h1 className="page-head">Welcome to Wake'N'Bake</h1>
            <div className="logo-image"></div>
            <p className="page-head">
                You got the munchies? <br></br>You're in the right place
            </p>
            {/* Featured Items, Link to Menu */}
            <div className="row home-featured-row">
                <h2 className="home-subhead">
                    Featured Items
                </h2>
                <div className="col-4 item-1">
                    <h3>
                        Item 1
                    </h3>
                </div>
                <div className="col-4 item-2">
                    <h3>
                        Item 2
                    </h3>
                </div>
                <div className="col-4 item-3">
                    <h3>
                        Item 3
                    </h3>
                </div>
                <Link className="navLink" to="/menu">Click HERE to view our menu!</Link>
            </div>
            {/* Highlight Rewards Program, incentive to sign in / sign up */}
            <div className="row home-rewards-other-row">
                
                <div className="col-6 reward-col">
                    <h2 className="home-subhead">
                        Rewards Program
                    </h2>
                    Here at Wake'N'Bake, we value our loyal customers, and want to give back. 
                    <br></br> 
                    Please sign in or sign up at the link to the right.
                    <br></br>
                    Upon signing in, you will be able to place orders, and accrue rewards on each purchase!
                    <br></br>
                    <Link className="navLink" to="/account">Proceed to Log-In</Link>
                </div>
                <div className="col-6">
                    Other Home Page Stuff
                </div>
            </div>
        </div>        
    );
}

export default Home;
