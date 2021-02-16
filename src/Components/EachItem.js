import React from 'react'
import Cardant from './Cardant'
import {catOneCards, catTwoCards} from './CardDetail';

export default function EachItem() {
    return (
        <div className="container">
            <div>
                <Cardant info={catOneCards} width="25%" val="0" title="Categories" />
            </div>
            <div>
                <Cardant info={catTwoCards} width="25%" val="0" title="Fruits"/>
            </div>
            <div>
                <Cardant info={catTwoCards} width="25%" val="0" title="Fruits"/>
            </div>
            <div>
                <Cardant info={catTwoCards} width="25%" val="0" title="Other"/>
            </div>
        </div>
    )
}
