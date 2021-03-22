import React from 'react'

import fast from '../img/fast.png';
import returnIcon from "../img/logistics.svg";

import "./Extras.css";

export default function Extras() {
    return (
        <div className="container">
            <div className="extras-grid">
                <div className="delivery-card">
                    <div className="glass">
                        <img src={fast} alt='cart' className="deliery-img" />
                        <p className="main-extras-info">2 Days</p>
                        <p>Delivery</p>
                        <p>60/- rs per order</p>
                    </div>
                </div>
                <div className="return-card">
                    <div className="glass">
                        <img src={returnIcon} alt="return-item" className="return-img" />
                        <p className="main-extras-info"> Easy </p>
                        <p>return</p>
                    </div>
                </div>
                <div className="bulk-card">
                    <div className="glass special-info">
                        <p>Special Offers for 
                        bulk order</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
