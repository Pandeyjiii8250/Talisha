import React from 'react';

//frameword antd
import {Input} from 'antd';

//private style sheet
import './Shopping.css';

//import of component
import ShoCart from './ShoCart'
import SidebarCart from "./SidebarCart";
import PriceShow from "./PriceShow";


const {Search} = Input;  //requirements to use input
export default function Shopping() {
    return (
        <div className="container flex-spacedbtw">
            <div>
                <div className='searchBox'> 
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                    />
                </div>
                <ShoCart />
            </div>
            <div className= "show-cart">
                <div>
                    <div className="cart-heading">
                        <h3>Your Cart</h3>
                    </div>
                    <SidebarCart />
                    <PriceShow />
                </div>
            </div>
        </div>
    )
}
