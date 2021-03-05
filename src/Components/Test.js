// This is test ground for all activities
import "./Test.css";

import React from 'react';
// import Cardant2 from './Cardant2'
import {DataProvider} from './Contex/DataProvider';
import {Button} from "antd";
import {catOneCards, catTwoCards} from "./CardDetail";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default function Test() {
    return (
        <DataProvider>
            <Container>
                <div className="contain-items">
                    {/* <div class="row row-cols-sm-2 row-cols-md-2 row-cols-lg-4"> */}
                    <Row g={2}>
                        {catOneCards.map((item)=>{
                            return(
                                <Col xs={6} sm={4} md={4} lg={3} className="my-col">
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
                                                    type="primary">
                                                    +<i class="fas fa fa-shopping-cart">
                                                </i></Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                
                            );
                            }
                        )}
                        {catTwoCards.map((item)=>{
                            return(
                                <Col xs={6} sm={4} md={4} lg={3} className="my-col">
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
                                                    type="primary">
                                                    +<i class="fas fa fa-shopping-cart">
                                                </i></Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                
                            );
                            }
                        )}
                        {catOneCards.map((item)=>{
                            return(
                                <Col xs={6} sm={4} md={4} lg={3} className="my-col">
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
                                                    type="primary">
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
