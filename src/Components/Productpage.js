import React from 'react'
import {Button} from 'antd'
import CardsContainer, {MainCard} from './Cards'

import Satya from "../img/satyanarayna.png";

import {useDataValue} from './Contex/DataProvider';
import Row from 'react-bootstrap/Row'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Popover from 'react-bootstrap/Popover'

import './Productpage.css'

export default function Productpage() {
    
    const {itemDetail, loading} = useDataValue();

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Item title</Popover.Title>
          <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Content>
        </Popover>
      );
    return (
        <>
        <div className="container">
            <div className="pp-start">
            <p>Name of Product</p>
            <div className="pp-main-head">
                <div className="pp-main-img">
                    <img src={Satya} alt="test" />
                </div>
                <div className="pp-main-content">
                    <p>Price</p>
                    <p>Offering</p>
                </div>
            </div>
            <div className="pp-main-description">
                <p>About Product</p>
                <p>This contain this Number of items. These items have these values.This contain this Number of items. These items have these values.</p>   
            </div>
            <p>You can update item by adding themto cart.</p>  
            </div>  
            <div className="pp-info">
                <div className="pp-info-glass">
                    <h5>2 Days delivery</h5>
                </div>
                <div className="pp-info-glass">
                    <h5>Easy  Return</h5>
                </div>
                <div className="pp-info-glass">
                    <h5>Free Delivery</h5>
                </div>
            </div>
            <CardsContainer>
                <h4>Items in Cart</h4>
                <Row g={2}>
                    {itemDetail.current.map((item, index)=>{
                        return(
                            <MainCard xs={12} sm={6} md={4} lg={3} index={index}>
                                <div className="pp-cart-item">
                                    <div className="pp-cart-img">
                                        <img src={item.img} alt="test-img" className="pp-img"></img>
                                    </div>
                                    <div className="pp-item-desc">
                                        <p>{item.title}</p>
                                        <p>{item.description} 
                                            <OverlayTrigger
                                                trigger="click"
                                                placement="top"
                                                // delay={{ show: 250, hide: 400 }}
                                                overlay={popover}
                                            >
                                                <i class="fas fa fa-info-circle fa-2x info"></i>
                                            </OverlayTrigger>
                                        </p>
                                        <p>{item.Price}rs/-</p>
                                        
                                    </div>
                                </div>
                            </MainCard>
                        )
                    })}
                </Row>
            </CardsContainer>
        </div>
        <div className="pp-btn-contain">    
            <div className="pp-btn">
                <Button className="bottom-btn">Add to Cart</Button>
                <Button type="primary" className="bottom-btn">Buy Now</Button>
            </div>
        </div>
        </>
    )
}
