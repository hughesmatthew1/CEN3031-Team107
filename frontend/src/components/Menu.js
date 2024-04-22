import React, { useEffect, useState } from 'react';
import MenuItem from "./MenuItem.js";
import MenuModal from "./MenuModal.js";

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
            <div className="row">
                <h1 className="page-head">Menu</h1>
            </div>    
            {/* Populates Menu with tiles for each item in database */}
            <div className="row gy-3 menu-row">
                {items.map(item => (
                    <div className="col-4" key={item.id}>
                        {<MenuItem item={item} key={item.id}/>}
                        {<MenuModal item={item}/>}
                    </div>
                ))}
                
            </div> 
        </section>
        // Menu page html
    );
}

export default Menu;
