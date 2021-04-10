import React from 'react'


// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Cards.css'


export default function CardsConatiner(props) {
    return (
        <div className="contain-items">
            {props.children}     
        </div>
    )
}

function MainCard(props){
    return(
        <Col 
            xs={props.xs} 
            sm={props.sm} 
            md={props.md} 
            lg={props.lg} 
            className="my-col" 
            key={props.index} 
            id={props.index} 
        >
            <div className="card h-100 my-card">
                {props.children}
            </div>
        </Col>
    )
}

export {MainCard}