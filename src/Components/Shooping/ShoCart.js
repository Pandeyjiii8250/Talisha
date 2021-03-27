import React from 'react';

//antd framework
import {Button} from "antd";

//sample information
import {catOneCards, catTwoCards} from "../CardDetail";

//contex provider
import {DataProvider} from '../Contex/DataProvider';
import {useDataValue} from '../Contex/DataProvider';
import {useStateValue} from '../StateProvider';

//bootstrap framework
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//prsonal style sheet
import "./ShoCart.css";

export default function ShoCart() {
    const {itemDetail, loading} = useDataValue();
    const [{basket}, dispatch] = useStateValue()
    //function that perfoem add to baset while button is pressed
    const addToBasket = (id, title, img)=>{
        dispatch({
            type:"ADD_ITEM",
            payload:{
                id:id,
                title:title,
                img:img,
                price:10,
                count:1
            }
        })
    }
    return (
        <DataProvider>
            <Container>
                <div className="contain-items">
                    <Row g={2}>
                        {itemDetail.current.map((item, index)=>{
                            return(
                                <Col xs={12} sm={6} md={6} lg={6} className="my-col-sho">
                                    {/* my-card get's it's css roperty from MyCard.css  */}
                                    <div className="h-100 my-card">
                                    <div className="shop-card">
                                        <div className="shop-img-container">
                                            <img src={item.img} className="card-img-top" alt="test"/>
                                            <p>Information about product and company...</p>
                                        </div>
                                        <div className="card-body shop-card-body">
                                            <div className="shop-card-content">
                                                <p>{item.title}</p>
                                                <p>{item.Price} rs/-</p>
                                                <p>Get Upto 30% off</p>
                                                <p>Quantity</p>    
                                            </div>
                                        </div>
                                    </div>
                                        <div className="shop-btn-carrier">
                                            <Button 
                                                className="add-cart-btn"
                                                shape="round" 
                                                type="primary"
                                                onClick={()=>addToBasket(index, item.title, item.img)}>
                                                +<i class="fas fa fa-shopping-cart fa-2x">
                                            </i></Button>
                                            <p>Special offers on offline payment</p>
                                        </div>
                                    </div>
                                </Col>    
                            );
                            }
                        )}
                    </Row>    
                </div>
            </Container>
        </DataProvider>
    )
}
