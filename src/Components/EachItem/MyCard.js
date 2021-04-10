import React from 'react';
import {Link} from 'react-router-dom';

//to use contex provider
// import {useStateValue} from '../StateProvider';

//import from bootstrap framework
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import CardsContainer, {MainCard} from '../Cards'

//personal css
import './MyCard.css';

export default function MyCard(props) {
    
    return (
        // <Container>
        <CardsContainer>
            <div className="card-main-heading">
                <p>Categories</p>
                <Link to="/shopping">
                    <div className="btn-carrier-head">
                        <p>View All <i class="fal fa fa-arrow-right"></i></p>
                    </div>
                </Link>
            </div>
            <Row g={2}>
                {props.info.map((item, index)=>{
                    return(
                        <MainCard xs={6} sm={4} md={4} lg={3} index={index}>
                            <img src={item.img} className="card-img-top" alt="test"/>
                            <div className="card-body my-card-body">
                            <div className="home-card-content">
                                <div className="card-heading">
                                    {item.title}
                                </div>
                                <div className="sneek-helper">
                                    <p>{props.sneek}</p>
                                </div>
                            </div>  
                            </div>
                        </MainCard>
                    );
                    }
                )}
            </Row>    
        </CardsContainer>
        // </Container>
    )
}
