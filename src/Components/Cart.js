import React from 'react'
import {Link} from 'react-router-dom';
import './Cart.css'
import {Button} from "antd";
import {useStateValue} from './StateProvider';
import Row from 'react-bootstrap/Row';

import CardsContainer, {MainCard} from './Cards'
// import Test, {EachCard} from './Test';
import {catOneCards} from './CardDetail'

export default function Cart() {
    
    const[{basket, userInfo}, dispatch] = useStateValue()

    return (
        <div className="container">
            <div className="display-order">
                <div className="Info-panel">
                    <p>Your Order</p>
                    <p>2 Days from now</p>
                    <p>Cash On Delivery</p>
                    <p>Cancel Order</p>
                </div>
                <div className="order-btn">
                    <Link to="/order"><Button
                        type="primary"
                    >Check More
                    </Button></Link>
                </div>
            </div>
            <CardsContainer>
                <Row g={2}>
                {basket.map((item, index)=>{
                    return(
                        <MainCard xs={12} sm={6} md={4} lg={3} index={index}>
                            <div className="cart-card-item">
                                <div>
                                    <img src={item.img} alt="test" className="card-img-top"/>
                                </div>
                                <div>
                                    <p className="cart-card-title">{item.title}</p>
                                    <p>10kg</p>
                                </div>
                                <div>
                                    <p className="cart-item-price">{item.price}/-</p>
                                    <div className="cart-change-btn">
                                        <Button type="primary">+</Button>
                                        <div>1</div>
                                        <Button>-</Button>
                                    </div>
                                </div>
                            </div>
                        </MainCard>
                    )
                })}
                </Row>
            </CardsContainer>
            <div className="cart-bottom-btn">
                <Button>
                    Add More
                </Button>
                <Button
                    type="primary"
                    className="cart-place-order"
                >
                    Place Order
                </Button>
            </div>
            {/* <div className="contain-items">
                <div className="card-main-heading">
                    <p>Current Cart</p>
                </div>
                <div>
                {basket.map((item)=>{
                    return(
                        <div className='order-cart-item'>
                            <div>
                                <img src={item.img} alt="test"/>
                            </div>
                            <div>
                                <p>{item.title}</p>
                                <p>10kg</p>
                            </div>
                            <div>
                                <p>{item.price}/-</p>
                                <p>Button</p>
                            </div>
                        </div>
                    )
                })}
                    
                </div> */}
                
            {/* </div> */}
        </div>
    )
}
