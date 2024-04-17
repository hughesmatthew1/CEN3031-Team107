import React from "react";
import MenuModalBody from "./MenuModalBody"

function MenuModal({item}){
    

    return(
        <div className="modal fade" id="MenuModal" tabIndex="-1" role="dialog" aria-labelledby="MenuTile" aria-hidden="true">
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
                        <button type="button" className="btn btn-primary">Add to Order</button>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default MenuModal;
