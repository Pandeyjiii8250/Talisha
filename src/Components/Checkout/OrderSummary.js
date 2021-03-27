import React from 'react';


//antd framework
import {Button} from "antd";

//contex provider
import {useStateValue} from '../StateProvider';
// import {useDataValue} from '../Contex/DataProvider';

import {getBasketTotal} from '../reducer';

//style sheet
import "./Checkout.css"


export default function OrderSummary(props) {

    const[{basket}, dispatch] = useStateValue()
    
    return (
        <>
            <div className="container">
                {/* the below class get's it's css style from MyCard.css  */}
                <div className="address-show">
                    <p>Address Details</p>
                    <p>R.M Dubey Chawl Amrut Nagar ghatkopar west 400086</p>
                </div>
                <div className="total gd">
                    <p>Grand Total </p>
                    <p>{getBasketTotal(basket)+60} /-</p>
                </div>
                <div className="osd-btn">
                    <Button
                        type="primary"
                        onClick={()=>{props.whenClick()}}>
                    Next
                    </Button>
                </div>
                <div className="show-item-info">
                    <h3>Order Summary</h3>
                    {basket.map((item, index)=>{
                        return(
                            <div className="each-item">
                                <div className="osd-img">
                                    <img src={item.img} alt="product img" className="osd-img" />
                                </div>
                                <div className="osd-item-info">
                                    <p>{item.title}</p>
                                    <p>10kg</p>
                                </div>
                                <div className="osd-price">
                                    <p>{item.price} /-</p>
                                </div>
                            </div>

                        )
                    })
                    }
                    
                    <div className="payment-info">
                        <div className="total osd-total">
                            <p>Total</p>
                            <p>{getBasketTotal(basket)}/-</p>
                        </div>
                        <div className="total osd-extras">
                            <p>Other Charges</p>
                            <p>60 /-</p>
                        </div>
                        <div className="total osd-gd">
                            <p>Grand Total</p>
                            <p>{getBasketTotal(basket)+60}/-</p>
                        </div>
                        <p className="policy">Return Policy</p>
                    </div>
                </div>
                <div className="osd-btn">
                    <Button>Add More</Button>
                    {/* <Button type="primary" onClick={()=> props.whenClick()} style={{margin:"0 10px"}}>Next</Button> */} 
                </div>
            </div>

        </>
    )
}
