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

    function addCount(id){
        // console.log(id)
        dispatch({
            type:'ADD_COUNT',
            payload:{
                id:id
            }
        })
    }

    function delCount(id, count){
        if (count === 1){
            dispatch({
                type:'DEL_ITEM',
                payload:{
                    id:id
                }
            })
        }else{
            dispatch({
                type:'DEL_COUNT',
                payload:{
                    id:id
                }
            })
        }
    }
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
                                    <p className="cart-item-price">{item.Price}/-</p>
                                    <div className="cart-change-btn">
                                        <Button type="primary" onClick={()=>{addCount(item.id)}}>+</Button>
                                        <div>{item.count}</div>
                                        <Button onClick={()=>{delCount(item.id, item.count)}}>-</Button>
                                    </div>
                                </div>
                            </div>
                        </MainCard>
                    )
                })}
                </Row>
            </CardsContainer>
            <div className="cart-bottom-btn">
                <Link to="/shopping"><Button>
                    Add More
                </Button></Link>
                {/* check wether user has signed in or not */}
                <Link to="/checkout"><Button
                    type="primary"
                    className="cart-place-order"
                >
                    Place Order
                </Button></Link>
            </div>
            
        </div>
    )
}
