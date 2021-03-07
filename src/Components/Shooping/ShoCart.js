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
    const addToBasket = (id, title)=>{
        dispatch({
            type:"ADD_ITEM",
            payload:{
                id:id,
                title:title,
                price:10,
                count:1
            }
        })
    }
    return (
        <DataProvider>
            <Container>
                <div className="contain-items">
                    {/* <div class="row row-cols-sm-2 row-cols-md-2 row-cols-lg-4"> */}
                    <Row g={2}>
                        {itemDetail.current.map((item, index)=>{
                            return(
                                <Col xs={6} sm={4} md={4} lg={3} className="my-col-sho">
                                    <div className="card h-100 my-card">
                                        <img src={item.img} className="card-img-top" alt="test"/>
                                        <div className="card-body my-card-body">
                                            <div className="card-heading">
                                                {item.title}
                                            </div>
                                            <div className="card-content">
                                                {/* company & ratings */}

                                                <p>Info</p>
                                                <p>{item.Price}</p>
                                            </div>
                                            <div className="btn-carrier">
                                                <Button 
                                                    shape="round" 
                                                    type="primary"
                                                    onClick={()=>addToBasket(index, item.title)}>
                                                    +<i class="fas fa fa-shopping-cart">
                                                </i></Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                
                            );
                            }
                        )}
                    </Row>    
                </div>
                
                {/* <Cardant2 /> */}
            </Container>
        </DataProvider>
    )
}
