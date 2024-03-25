import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
            <nav class='navbar-expand default' fixed='top'>
                <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='navPage' aria-controls='navPage' aria-expanded='false' aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div id='navPage' class='navbar'>
                    <div class='navbar-nav al-auto'>
                        <Link class="navLink" to='/'>Home</Link>
                    </div>
                    <div class='navbar-nav al-auto'>
                        <Link class="navLink" to='/menu'>Menu</Link>
                    </div>
                    <div class='navbar-nav al-auto'>
                        <Link class="navLink" to='/order'>Order</Link>
                    </div>
                    <div class='navbar-nav al-auto'>
                        <Link class="navLink" to='/account'>Account</Link>
                    </div>
                    <div class='navbar-nav al-auto'>
                        <Link class="navLink" to='/about'>About</Link>
                    </div>
                    <div class='navLogo'>
                        Wake'n'Bake
                    </div>                        
                </div>
            </nav>
        
    );
}

export default Nav;
