import React from "react";
import MenuModal from "./MenuModal";

function MenuItem({item}){

    var modalTarget = "#MenuModal"+item.name.split(" ").join("")

    return(
        <section>
            <button type="button" className="button container-fluid menuItem-tile" data-bs-toggle="modal" data-bs-target={modalTarget}>
                <div className="row menuItem-img-row">
                    Placeholder for image of our product
                    {/* Image */}
                </div>
                <div className="row">
                    <div className="col-9">
                        {item.name}
                    </div>
                    <div className = "col-3">
                        {item.price}
                    </div>
                </div>
            </button>
            
        </section>
    );
}

export default MenuItem;
