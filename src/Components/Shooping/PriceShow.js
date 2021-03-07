import React from 'react';

//antd frame work
import {Button} from 'antd';
//private style sheet
import "./PriceShow.css";

//import from contextprovider
import {useStateValue} from '../StateProvider';
import {getBasketTotal} from '../reducer';

export default function PriceShow() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="price-section">
            <div className="flex-spacedbtw">
                <p className="tamount">Total Amount</p>
                <p>{getBasketTotal(basket)}</p>
            </div>
            <Button type="primary">Place order</Button>
        </div>
    )
}
