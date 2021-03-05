import React from 'react';
import Cardant from './Cardant';
import cartCards from "./CardDetail";
// import MyCard from './MyCard';
import './PreMadeCart.css';

export default function PreMadeCarts() {
    return (
        <div className="container carts"> 
        <h3>Carts for use.</h3>
        <div>
          <Cardant info={cartCards} width="33%" val="1"/>
          {/* <MyCard info={cartCards} /> */}
        </div>
    </div>
    )
}
