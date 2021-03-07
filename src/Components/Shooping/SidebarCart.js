import React from 'react';

//import from material ui frame work
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

//private style sheet
import "./SidebarCart.css";

//import to use contextprovider
import {useStateValue} from '../StateProvider';

export default function SidebarCart() {
    const[{basket},dispatch] = useStateValue();

    function delItem(id){
        dispatch({
            type:"DEL_ITEM",
            payload:{
                id:id
            }
        })
    }

    function addCount(id){
        dispatch({
            type:"ADD_COUNT",
            payload:{
                id:id
            }
        })
    }
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
                    <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>addCount(item.id)}>
                        <AddShoppingCartIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={()=>delItem(item.id)}>
                        <DeleteIcon />
                    </IconButton>
                 </div>
             </div>
         </div>)}
        )}
        </>
    )
}
