import React from 'react';

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
            <div>
                <MyCard info={itemDetail.current.slice(0,4)}/>
                {/* <Cardant info={itemDetail.current.slice(0,4)} width="25%" val="0" title="Categories" /> */}
                {/* <Cardant info={catOneCards} width="25%" val="0" title="Categories" /> */}
            </div>
            <div>
                <MyCard info={itemDetail.current.slice(4,8)}/>
                {/* <Cardant info={catTwoCards} width="25%" val="0" title="Fruits" /> */}
                {/* <Cardant info={itemDetail.current.slice(4,8)} width="25%" val="0" title="Fruits"/> */}
            </div>
            <div>
                <MyCard info={itemDetail.current.slice(0,4)}/>
                {/* <Cardant info={itemDetail.current.slice(0,4)} width="25%" val="0" title="Fruits"/> */}
                {/* <Cardant info={catOneCards} width="25%" val="0" title="Fruits" /> */}
            </div>
            <div>
                <MyCard info={itemDetail.current.slice(4,8)}/>
                {/* <Cardant info={catTwoCards} width="25%" val="0" title="Other" /> */}
                {/* <Cardant info={itemDetail.current.slice(4,8)} width="25%" val="0" title="Other"/> */}
            </div> 
            </>:
            <h1>loading....</h1>}
        </div>
    )
}
