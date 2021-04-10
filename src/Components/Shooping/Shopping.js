import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
//frameword antd
import {Input} from 'antd';
import Button from 'react-bootstrap/Button'

//private style sheet
import './Shopping.css';

//import of component
import ShoCart from './ShoCart'
import SidebarCart from "./SidebarCart";
import PriceShow from "./PriceShow";
import {useStateValue} from '../StateProvider'
import { db } from '../../firebase';
import { useAuth } from '../Contex/AuthContex';

const {Search} = Input;  //requirements to use input

export default function Shopping() {
    const[{basket}, dispatch] = useStateValue();
    const search = useRef()
    const offsrtmy = useRef()
    const {currentUser} = useAuth()

    //runs every time when window is scrolled
    window.onscroll = function(){
        //this set the offset only once
        if (search.current != null && offsrtmy.current == null){
            offsrtmy.current = search.current.offsetTop
        }
        //this helps to add and remove sticky class
        scrollFun()
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

    function createNewCartId(){
        const rand = (Math.random()*1000) + 1
        document.cookie = `cartId=${rand};max-age=43200`;
        // console.log(rand)
        db.collection('carts').doc(rand.toString()).set({
            'basket':basket,
            status:'constructing'  
        })
        .then(()=>{
            console.log('anonymus cart saved')
        })
        .catch((e)=>{
            console.log(e)
        })

        // update currentUser cartID detail
        if(currentUser){
            db.collection('user').doc(currentUser.uid).set({
                cartId:rand
            },{merge:true})
            .then(()=>{
                console.log('Added cartID to user')
            })
            .catch(e=>console.log(e))
        }
    }

    
    function updateCart(){
        console.log(basket.length)
        if(basket.length){
            const cartId = getCartId()
            // console.log(cartId)
            if(cartId){
                //if there is a cartId in cookie
                db.collection('carts').doc(cartId).set({
                    basket:basket
                },{merge:true})
            }else{
                //there is no cartId in cookie but user added item in cart
                //create a cartId
                createNewCartId()
            }
        }
        
    }

    useEffect(()=>{
        updateCart()
    },[basket])
    

    const scrollFun = ()=>{
        if(window.pageYOffset >= offsrtmy.current){
            if(search.current != null){
                search.current.classList.add("sticky")
            }
        }
        else{
            if (search.current != null){
                search.current.classList.remove("sticky")
            }
        }
        
    }
    return (
        <>
        <div className='searchBox' ref = {search}> 
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
            />
        </div>
        <div className="container flex-spacedbtw">
            <div>
                <ShoCart />
            </div>
            <div className= "show-cart">
                <div>
                    <div className="cart-heading">
                        <h3>Your Cart</h3>
                    </div>
                    <SidebarCart />
                    <PriceShow />
                </div>
            </div>
        </div>
        <div className="place-order">
            <p><span>{basket?.length}</span> item in Cart</p>
            <Link to={currentUser?basket.length?"/checkout":'/shopping':"/Signup"}><Button> Place Order</Button></Link>
        </div>
        </>
    )
}
