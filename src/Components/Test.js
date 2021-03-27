//main test area

import React from 'react';

//antd framework
import {Button} from "antd";

//sample information
// import {catOneCards, catTwoCards} from "../CardDetail";

//contex provider
import {DataProvider} from './Contex/DataProvider';
import {useDataValue} from './Contex/DataProvider';
import {useStateValue} from './StateProvider';

//bootstrap framework
import Container from 'react-bootstrap/Container';

//prsonal style sheet
import "./Test.css";

export default function Test() {
    const {itemDetail, loading} = useDataValue();
    const [{basket}, dispatch] = useStateValue()
    
    return (
        <DataProvider>
            <Container>
                {/* the below class get's it's css style from MyCard.css  */}
                <div className="address-show">
                    <p>Address Details</p>
                    <p>R.M Dubey Chawl Amrut Nagar ghatkopar west 400086</p>
                </div>
                <div className="total gd">
                    <p>Grand Total </p>
                    <p>2560 /-</p>
                </div>
                <div className="osd-btn">
                    <Button
                        type="primary">
                    Next
                    </Button>
                </div>
                <div className="show-item-info">
                    <h3>Order Summary</h3>
                    {itemDetail.current.map((item, index)=>{
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
                                    <p>{item.Price} /-</p>
                                </div>
                            </div>

                        )
                    })
                    }
                    
                    <div className="payment-info">
                        <div className="total osd-total">
                            <p>Total</p>
                            <p>2500 /-</p>
                        </div>
                        <div className="total osd-extras">
                            <p>Other Charges</p>
                            <p>60 /-</p>
                        </div>
                        <div className="total osd-gd">
                            <p>Grand Total</p>
                            <p>2560 /-</p>
                        </div>
                        <p className="policy">Return Policy</p>
                    </div>
                </div>
                <div className="osd-btn">
                    <Button>Add More</Button>
                    <Button type="primary">Next</Button>
                </div>
            </Container>
        </DataProvider>
    )
}

