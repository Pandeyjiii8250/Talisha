import React from 'react'
import {useStateValue} from '../StateProvider';


import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default function OrderSummary() {
    const[{basket}, dispatch] = useStateValue()
    
    return (
        <>
        {basket.map(item=>{
        return(<div className="border-container">
             <div className="flex-spacedbtw items-info">
                <p className="cart-item-name">{item.title}</p>
                <p className="item-price">x {item.count}</p>
                <p>{item.count*item.price}</p>
             </div>
             <div className="flex-spacedbtw items-info">
                 <div>
                    <IconButton color="primary" aria-label="add to shopping cart" >
                        <AddShoppingCartIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                 </div>
             </div>
         </div>)}
        )}
        </>
    )
}
