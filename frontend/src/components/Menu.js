import React, { useEffect, useState } from 'react';
import MenuItem from "./MenuItem.js";

function Menu() {
    // Retrieve all menu items from database
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/menu');
        const items = await data.json();
        setItems(items);   
    };

    return(
        <section>
            <div class="row">
                <h1 class="page-head">Menu</h1>
            </div>    
            {/* Populates Menu with tiles for each item in database */}
            <div class="row gy-3 menu-row">
                {items.map(item => (
                    <div class="col-4" key={item.id}>
                        {<MenuItem item={item} key={item.id}/>}
                    </div>
                ))
                }
            </div> 
        </section>
        // Menu page html
    );
}

export default Menu;
