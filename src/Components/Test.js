//main test area
import React from 'react';
import {Link} from 'react-router-dom';

//to use contex provider
// import {useStateValue} from '../StateProvider';

//import from bootstrap framework
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {catOneCards} from './CardDetail';


//personal css
import './Test.css';

export default function Test(props) {
    
    return (
        // <Container>
        <div className="contain-items">
            <Row g={2}>
                {props.children}
            </Row>     
        </div>
        // </Container>
    )
}


function EachCard(props){
    return(
        <Col xs={6} sm={4} md={4} lg={3} className="my-col" key={props.index} id={props.index} >
            <div className="card h-100 my-card">
                {props.children}
            </div>
        </Col>
    )
}

export {EachCard};