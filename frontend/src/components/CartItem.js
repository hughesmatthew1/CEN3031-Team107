import React from 'react';



function CartItem() {
    return(
        <div class="row cart-item">
            <div class="col-6 cart-item-name">
                ITEM NAME
            </div>
            <div class="col-3 cart-item-quantity">
                NUM ITEM
            </div>
            <div class="col-3 cart-item-adjust">
                CHANGE Q
            </div>
        </div>
    );
}

export default CartItem;
