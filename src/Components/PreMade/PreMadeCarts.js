import React from 'react';

//this makes use of media query possible
import { useMediaQuery } from 'react-responsive';

//Componets used hear
import Cardant from './Cardant';
import CarouselMy from './CarouselMy';

//contains sample information
import cartCards from "../CardDetail";

//personal style sheet
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
