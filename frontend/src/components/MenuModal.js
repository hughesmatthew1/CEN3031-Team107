import React from "react";
import MenuModalBody from "./MenuModalBody"

function MenuModal({item}){
    return(
        <div class="modal fade" id="MenuModal" tabIndex="-1" role="dialog" aria-labelledby="MenuTile" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content menu-modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="MenuTile">{item.name}</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close" justify="right">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {<MenuModalBody item={item}/>}
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Add to Order</button>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default MenuModal;
