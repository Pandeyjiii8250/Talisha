import React from 'react';
import {Button} from 'antd';
import "./PriceShow.css";
import {useStateValue} from './StateProvider';
import {getBasketTotal} from './reducer';

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
