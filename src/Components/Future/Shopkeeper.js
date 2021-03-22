import React from 'react'

import Button from 'react-bootstrap/Button';

import Shops from "../../img/shops.svg"


export default function Shopkeeper() {
    return (
        <div className="container for-other-visitors">
            <div className="future">
            <p>For</p>
            <h2>Shopkeeper</h2>
            <p>Sell Online</p>
            <Button variant="outline-light">Sign In</Button>
            {/* <div className="glass img-glass">
                <img src={Shops} />
            </div> */}
            </div>
            
        </div>
    )
}
