import React from 'react'
import Cardant from './Cardant'
// import {catOneCards, catTwoCards} from './CardDetail';
import {useDataValue} from './Contex/DataProvider';
export default function EachItem() {
    const {itemDetail, loading} = useDataValue();

    return (
        <div className="container">
            {loading ?
            <>
            <div>
                <Cardant info={itemDetail.current.slice(0,4)} width="25%" val="0" title="Categories" />
                {/* <Cardant info={catOneCards} width="25%" val="0" title="Categories" /> */}
            </div>
            <div>
                {/* <Cardant info={catTwoCards} width="25%" val="0" title="Fruits" /> */}
                <Cardant info={itemDetail.current.slice(4,8)} width="25%" val="0" title="Fruits"/>
            </div>
            <div>
                <Cardant info={itemDetail.current.slice(0,4)} width="25%" val="0" title="Fruits"/>
                {/* <Cardant info={catOneCards} width="25%" val="0" title="Fruits" /> */}
            </div>
            <div>
                {/* <Cardant info={catTwoCards} width="25%" val="0" title="Other" /> */}
                <Cardant info={itemDetail.current.slice(4,8)} width="25%" val="0" title="Other"/>
            </div> 
            </>:
            <h1>....loading</h1>}
        </div>
    )
}
