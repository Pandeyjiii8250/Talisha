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

const {Search} = Input;  //requirements to use input
export default function Shopping() {
    const[{basket}, dispatch] = useStateValue();
    const search = useRef()
    const offsrtmy = useRef()
    // const offpmo = useRef(window.getElementById("footer-know").offsetTop)

    useEffect(()=>{
        // console.log(offpmo.current);
        if(search.current != null){
            offsrtmy.current = search.current.offsetTop;
            window.onscroll = function() {scrollFun()}
        }
    },[])
    

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
            <Link to="/checkout"><Button> Place Order</Button></Link>
        </div>
        </>
    )
}
