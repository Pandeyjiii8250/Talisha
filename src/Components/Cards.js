//...........Just another test Cards

import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
// import card1 from "../img/satyanarayna.png";


function Cards(props){
    return(
        <Row>
            {props.info.map(item=>{
                return(<Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {item.img} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button variant="primary">{item.Price}</Button>
                    </Card.Body>
                </Card>
            </Col>)
            })}
        </Row>
    );
}

export default Cards;