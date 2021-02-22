import React from 'react';
import {Button} from 'antd';
import "./PriceShow.css";

export default function PriceShow() {
    return (
        <div className="price-section">
            <div className="flex-spacedbtw">
                <p className="tamount">Total amount</p>
                <p>Count</p>
            </div>
            <Button type="primary">Place order</Button>
        </div>
    )
}
