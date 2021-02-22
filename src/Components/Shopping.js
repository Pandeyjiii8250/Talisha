import React from 'react';
import {Input} from 'antd';
import EachItem from './EachItem';
import './Shopping.css';
import SidebarCart from "./SidebarCart";
import PriceShow from "./PriceShow";


const {Search} = Input;
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
                <EachItem />
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
