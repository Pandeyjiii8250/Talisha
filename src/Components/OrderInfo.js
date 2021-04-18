import React from 'react'
import {useStateValue} from './StateProvider'
import CardsContainer, {MainCard} from './Cards'

import Row from 'react-bootstrap/Row'
import './OrderInfo.css'
import {getBasketTotal} from './reducer'
export default function OrderInfo() {
    
    const[{orderInfo}, dispatch] = useStateValue()

    return (
        //total ammount 
        <>
        <div className="container">
            <div className="order-add">
                <h4>Address Details</h4>
                {/* {console.log(orderInfo.orderAdd)} */}
                <p>{orderInfo.orderAdd.houseNo ? `${orderInfo.orderAdd.houseNo} ${orderInfo.orderAdd.other} ${orderInfo.orderAdd.city} ${orderInfo.orderAdd.state} ${orderInfo.orderAdd.pincode}`: `loading...` }</p>
            </div>
            <div className="order-delivery-stat">
                <p><span>2 days</span> from now</p>
                <p>Order is <span>{orderInfo.status}</span></p>
            </div>
            <div className="order-delivery-stat">
                <p>Total amount {getBasketTotal(orderInfo.orderBasket)}rs/-</p>
                <p>Cash On Delivery</p>
            </div>
            <CardsContainer>
                <h4>Order Cart Item</h4>
                <Row g={2}>
                    {orderInfo.orderBasket.map((item, index)=>{
                        return (
                            <MainCard xs={12} sm={6} md={4} lg={3} index={index}>
                                <div className="order-card-item">
                                    <div>
                                        <img src={item.img} alt="test-img"></img>
                                    </div>
                                    <div className="order-item-content">
                                        <p>{item.title}</p>
                                        <div className="order-card-item-info">
                                            <p>{item.count}*</p>
                                            <p>{item.price} rs/-</p>
                                        </div>
                                    </div>
                                </div>
                            </MainCard>
                        )
                    })}
                </Row>
            </CardsContainer>
            
        </div>
            
        </>
    )
}
