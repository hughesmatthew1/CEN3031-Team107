import React from 'react';



function CartItem() {
    return(
        <div className="row cart-item">
            <div className="col-6 cart-item-name">
                ITEM NAME
            </div>
            <div className="col-3 cart-item-quantity">
                NUM ITEM
            </div>
            <div className="col-3 cart-item-adjust">
                CHANGE Q
            </div>
        </div>
    );
}

export default CartItem;
