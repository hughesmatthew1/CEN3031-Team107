import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div>
            <h1 class="page-head">Welcome to Wake'N'Bake</h1>
            <p> add logo</p>
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
            <div class="row home-rewards-row">
                
            </div>
            <p>Group ###'s project</p>
        </div>        
    );
}

export default Home;
