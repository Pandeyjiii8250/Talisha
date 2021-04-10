import React, {useRef} from 'react';
import { Steps, Button, message } from 'antd';
import Getaddress from './Getaddress';
import OrderSummary from './OrderSummary';
import Payment from './Payment';
import { useAuth } from "../Contex/AuthContex";

import {useStateValue} from '../StateProvider';

import './Checkout.css'
import { db } from '../../firebase';

const { Step } = Steps;



export default function Checkout() {
    const formRef = useRef()
    const[{basket,userInfo}, dispatch] = useStateValue();
    const startVal = userInfo.address ? 1 : 0
    const [current, setCurrent] = React.useState(startVal);
    const {currentUser} = useAuth()

    

    const next = () => {
      if(current === 0){
        // we add a EventListner before submitting a form
        formRef.current.addEventListener('submit', ()=>{
          console.log("form submitted")
          setCurrent(current + 1)
        })
        formRef.current.requestSubmit()
      }else{
        setCurrent(current + 1);
      }
      
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };

    function emptyBucket(){
      dispatch({
        type:'DEL_CART',
        payload:{
          basket:[]
        }
      })
    }

    function getCartId(){
      var cartId = null
      const getCookie = document.cookie;
      const cookieList = getCookie.split(';')
      cookieList.forEach((item)=>{
        if(item.includes('cartId')){
          cartId = item.split('=')[1]
        }
      })
      return cartId
    }

    const placeOrder = ()=>{
      console.log('order placed')
      const orderId = (Math.random()*1000) + 1
      const cartId = getCartId()
      //placed new orderId in firebase
      db.collection('orders').doc(orderId.toString()).set({
        userUid:currentUser.uid,
        cartId:cartId,
        basket:basket,
        userAdd:userInfo.address,
        userPhone:currentUser.phoneNumber,
        status:"giveMe"
      },{merge:true})
      db.collection('user').doc(currentUser.uid).set({
        cartId:null,
        order:{
          cartId:cartId,
          orderId:orderId,
          address:userInfo.address,
          phoneNumber:currentUser.phoneNumber,
          status:'orderPlaced'
        }
      },{merge:true})
      //remove the cartId from cookie
      document.cookie = 'cartId=0;max-age=0'
      //remove all items from basket
      emptyBucket()
      
    }

    const steps = [
      {
        title: 'Address',
        content: <Getaddress getRef={formRef}/>,
      },
      {
        title: 'Order Summry',
        content: <OrderSummary whenClick={next} />,
      },
      {
        title: 'Payment',
        content: <Payment />,
      },
    ];

    
  
    return (
      <div className="container">
        <Steps current={current} className="step-design">
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action osd-btn">
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={
              () => {
                message.success('Processing complete!')
                placeOrder()
                }}>
              Done
            </Button>
          )}
          
        </div>
      </div>
    );
}
