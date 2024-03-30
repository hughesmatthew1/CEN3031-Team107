import React from "react";
import MenuModal from "./MenuModal";

function MenuItem({item}){
    return(
        <section>
            <button type="button" class="button container-fluid menuItem-tile" data-bs-toggle="modal" data-bs-target="#MenuModal">
                <div class="row menuItem-img-row">
                    Image Make entire tile a button that adds to active user cart
                    {/* Image */}
                </div>
                <div class="row">
                    <div class="col-9">
                        {item.name}
                    </div>
                    <div class = "col-3">
                        {item.price}
                    </div>
                </div>
            </button>
            {<MenuModal item={item}/>}
        </section>
    );
}

export default MenuItem;
