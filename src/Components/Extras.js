import React from 'react'


//importing images required
import fast from '../img/fast.png';
import returnIcon from "../img/logistics.svg";

//personal style sheet
import "./Extras.css";

export default function Extras() {
    return (
        <div className="container">
            <div className="extras-flex">
                <div className="delivery-card">
                    <div className="glass delivery-glass-card">
                        <img src={fast} alt='cart' />
                        <p className="main-extras-info">2 Days</p>
                        <div className="less-imp-info">
                            <p>Delivery</p>
                            <p>60/- rs per order</p>             
                        </div>
                        
                    </div>
                </div>
                <div>
                    <div className="return-card">
                        <div className="glass">
                            <img src={returnIcon} alt="return-item" className="return-img" />
                            <p className="main-extras-info return-info"> Easy </p>
                            <p >return</p>
                        </div>
                    </div>
                    <div className="bulk-card">
                        <div className="glass bulk-glass-card less-imp-info">
                            <p>Special Discount</p>
                            <p>for</p>
                            <h4>BULK</h4>
                            <p>order</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
