// This is test ground for all activities
import "./Test.css";

import React, {useState, useEffect} from 'react';
// import Cardant2 from './Cardant2'
import {DataProvider} from './Contex/DataProvider';
import {Button} from "antd";
import {catOneCards, catTwoCards} from "./CardDetail";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

export default function Test(){

    function nextItem(){
      const activateNewCard = document.getElementsByClassName("car-card");
      for (var i=0 ; i<activateNewCard.length; i++){
            // console.log(activateNewCard.length);
            // console.log(activateNewCard[i].classList);
        if(activateNewCard[i].classList.contains("card-active")){
            if (i+2 < activateNewCard.length){
                // console.log(i+2)
                activateNewCard[i].classList.remove("card-active");
                activateNewCard[i+2].classList.add("card-active");
            }
            break;
        }
      }
    }

    function prevItem(){
        const moveBack = document.getElementsByClassName("car-card");
        var i = moveBack.length - 1;
        for (i; i>=0; i--){
            if(moveBack[i].classList.contains("card-active")){
                if(i-2>=0){
                    moveBack[i].classList.remove("card-active")
                    moveBack[i-2].classList.add("card-active");
                }
                break;
            }
        }
    }

    useEffect(()=>{
        const twoCards = document.getElementsByClassName("car-card")
        for (var i = 0; i<2; i++){
            console.log("Yo");
            twoCards[i].classList.add("card-active");
        }
    },[])

    return (
        <Container>
            <div className="carousel-container">
                {catOneCards.map((item)=>{
                    return(
                        <div className="card h-100 my-card car-card">
                            <img src={item.img} className="card-img-top" alt="test"/>
                            <div className="card-body my-card-body"> 
                                <div className="card-heading">
                                    {item.title}
                                </div>
                                <div className="card-content">
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
                    );

                })}
                <div className="changeButton">
                <div  onClick={prevItem}><i class="fas fa fa-caret-left fa-2x"></i></div>
                <div onClick={nextItem}><i class="fas fa fa-caret-right fa-2x"></i></div>
                </div>
                
            </div>
        </Container>
    );
}
// export default function Test2() {
//     const [index, setIndex] = useState(0);

//     const handelIndex = (selectIndex, e)=>{
//         setIndex(selectIndex);
//     }
//     return (
//         <DataProvider>
//             <Container>
//                 <div className="carousel-items-contain">
//                     <Carousel activeIndex={index} onSelect={handelIndex} touch={true}>
//                         {catOneCards.map((item)=>{
//                             return(
//                                     <Carousel.Item className="myCarousel">
//                                         <div className="card h-100 my-card">
//                                             <img src={item.img} className="card-img-top" alt="test"/>
//                                             <div className="card-body my-card-body">
//                                                 <div className="card-heading">
//                                                     {item.title}
//                                                 </div>
//                                                 <div className="card-content">
//                                                     {/* company & ratings */}

//                                                     <p>Info</p>
//                                                     <p>{item.Price}</p>
//                                                 </div>
//                                                 <div className="btn-carrier">
//                                                     <Button 
//                                                         shape="round" 
//                                                         type="primary">
//                                                         +<i class="fas fa fa-shopping-cart">
//                                                     </i></Button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Carousel.Item>
                                    
//                                 );
//                             }
//                         )}
//                     </Carousel>
//                 </div>
//             </Container>
//         </DataProvider> 
//     )
// }


