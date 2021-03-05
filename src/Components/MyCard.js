import React from 'react';
import {useStateValue} from './StateProvider';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import './MyCard.css';

export default function MyCard(props) {
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
        // <Container>
            <div className="contain-items">
                <div className="card-main-heading">
                    <p>Categories</p>
                    <Link to="/shopping"><p>View All <i class="fal fa fa-arrow-right"></i></p></Link>
                </div>
                <Row g={2}>
                    {props.info.map((item, index)=>{
                        return(
                            <Col xs={6} sm={4} md={4} lg={3} className="my-col" key={index} id={index} >
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
                                            <Link to="/shopping"><Button 
                                                shape="round" 
                                                type="primary"
                                                onClick={()=>addToBasket(index, item.title)}>
                                                +<i class="fas fa fa-shopping-cart">
                                            </i></Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>    
                        );
                        }
                    )}
                </Row>    
            </div>
        // </Container>
    )
}
