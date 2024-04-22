import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
            <nav className='navbar-expand default' fixed='top'>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='navPage' aria-controls='navPage' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div id='navPage' className='navbar'>
                    <div className='navbar-nav al-auto'>
                        <Link className="navLink" to='/'>Home</Link>
                    </div>
                    <div className='navbar-nav al-auto'>
                        <Link className="navLink" to='/menu'>Menu</Link>
                    </div>
                    <div className='navbar-nav al-auto'>
                        <Link className="navLink" to='/order'>Order</Link>
                    </div>
                    <div className='navbar-nav al-auto'>
                        <Link className="navLink" to='/account'>Account</Link>
                    </div>
                    <div className='navbar-nav al-auto'>
                        <Link className="navLink" to='/about'>About</Link>
                    </div>
                    <div className='navLogo'>
                        <div className='sub-navLogo'>
                            LOGO
                        </div> 
                    </div>                        
                </div>
            </nav>
        
    );
}

export default Nav;
