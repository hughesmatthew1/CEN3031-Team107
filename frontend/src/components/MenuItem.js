import React from "react";
import MenuModal from "./MenuModal";

function MenuItem(){
    return(
        <section>
            <button type="button" class="button container-fluid tile" data-bs-toggle="modal" data-bs-target="#MenuModal">
                <div class="row">
                    Image Make entire tile a button that adds to active user cart
                    {/* Image */}
                </div>
                <div class="row">
                    <div class="col-9">
                        Item Name
                    </div>
                    <div class = "col-3">
                        Price
                        {/* Macro Popup */}
                    </div>
                </div>
            </button>
            {<MenuModal/>}
        </section>
    );
}

export default MenuItem;
