import React from 'react';
import MenuItem from "./MenuItem.js"

function Menu() {
    return(
        <section>
            <div class="row">
                <h1 class="page-head">Menu</h1>
            </div>    
            <div class="row menu-row">
                <div class="col-4">
                    {<MenuItem/>}
                </div>
                <div class="col-4">
                    {<MenuItem/>}
                </div>
                <div class="col-4">
                    {<MenuItem/>}
                </div>
            </div> 
        </section>
        // Menu page html
    );
}

export default Menu;
