import React from 'react';

function ShoppingCartItem({cartItem}) {
    return (
        <div>
            <p>{cartItem.title}</p>
        </div>
    );
}

export default ShoppingCartItem;