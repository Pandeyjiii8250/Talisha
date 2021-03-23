import React from 'react';
import {Link} from 'react-router-dom';
// component use hear
import MyCard from './MyCard';

//use of context provider
import {useDataValue} from '../Contex/DataProvider';

export default function EachItem() {
    const {itemDetail, loading} = useDataValue();

    return (
        <div className="container">
            {loading ?
            <>
            <div className="gradient-container1">
                <Link to="/shopping"><MyCard info={itemDetail.current.slice(0,4)} sneek="Special Offers inside"/></Link>
                {/* <Cardant info={itemDetail.current.slice(0,4)} width="25%" val="0" title="Categories" /> */}
                {/* <Cardant info={catOneCards} width="25%" val="0" title="Categories" /> */}
            </div>
            <div className="gradient-container2">
                <Link to="/shopping"><MyCard info={itemDetail.current.slice(4,8)} sneek="More than 20% OFF"/></Link>
                {/* <Cardant info={catTwoCards} width="25%" val="0" title="Fruits" /> */}
                {/* <Cardant info={itemDetail.current.slice(4,8)} width="25%" val="0" title="Fruits"/> */}
            </div>
            <div className="gradient-container3">
                <Link to="/shopping"><MyCard info={itemDetail.current.slice(0,4)} sneek="More than 20% Off"/></Link>
                {/* <Cardant info={itemDetail.current.slice(0,4)} width="25%" val="0" title="Fruits"/> */}
                {/* <Cardant info={catOneCards} width="25%" val="0" title="Fruits" /> */}
            </div>
            <div className="gradient-container4">
                <Link to="/shopping"><MyCard info={itemDetail.current.slice(4,8)} sneek="Special offers inside"/></Link>
                {/* <Cardant info={catTwoCards} width="25%" val="0" title="Other" /> */}
                {/* <Cardant info={itemDetail.current.slice(4,8)} width="25%" val="0" title="Other"/> */}
            </div> 
            </>:
            <h1>loading....</h1>}
        </div>
    )
}
