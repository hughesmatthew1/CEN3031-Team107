import React from "react";
import MenuModalBody from "./MenuModalBody"

function MenuModal({item}){
    
    const handleClick = async (e) => {
        e.preventDefault()
        let cart = JSON.parse(sessionStorage.getItem("user-cart"))
        cart.push(item)
        sessionStorage.setItem("user-cart", JSON.stringify(cart))
    }

    var modalID = "MenuModal"+item.name.split(" ").join("")

    return(
        <div className="modal fade" id={modalID} tabIndex="-1" role="dialog" aria-labelledby="MenuTile" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content menu-modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="MenuTile">{item.name}</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" justify="right">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {<MenuModalBody item={item}/>}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleClick} data-bs-dismiss="modal">Add to Order</button>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default MenuModal;
