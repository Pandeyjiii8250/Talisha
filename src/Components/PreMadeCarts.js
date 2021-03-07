import React from 'react';
import { useMediaQuery } from 'react-responsive'
import Cardant from './Cardant';
import CarouselMy from './CarouselMy';
import cartCards from "./CardDetail";
// import MyCard from './MyCard';
import './PreMadeCart.css';


export default function PreMadeCarts() {
  const checkMedia = useMediaQuery({query:'(max-width:990px)'})
    return (
        <div className="container carts"> 
        <h3>Carts for use.</h3>
        <div>
          {checkMedia ?
          <CarouselMy info={cartCards}/>:
          <Cardant info={cartCards} width="33%" val="1" />}
          {/* <MyCard info={cartCards} /> */}
        </div>
    </div>
    )
}
