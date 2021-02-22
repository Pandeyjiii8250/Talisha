import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import "./SidebarCart.css";

export default function SidebarCart() {
    return (
        <div className="border-container">
            <div className="flex-spacedbtw items-info">
                <p className="cart-item-name">Named Item</p>
                <p>Price</p>
            </div>
            <div className="flex-spacedbtw items-info">
                <p className="item-price">count</p>
                <div>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
