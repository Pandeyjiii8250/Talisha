import React, {useRef, useState} from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
// import {useAuth} from './Contex/AuthContex';
import './SignUp.css';


export default function PhoneSignUp(props) {
    const [otpValidateBox, updateOtpValidateBox] = useState(false);
    const phoneref = useRef();
    const otpref = useRef();
    // const {signup} = useAuth();

    // async function handelSubmit(e){
    //     e.preventDefault();
    //     console.log(emailref.current.value, passref.current.value)
    //     try{
    //         await signup(emailref.current.value, passref.current.value);
    //     }catch(err){
    //         console.log(err);
    //     }       
    // }
    return (
        <div className='signup'>
            <h1>Sign Up</h1>
            <form method='POST'>
                <div>
                    <div>
                        <label>Phone No.</label>
                        <input type="Enter Phone no." ref={phoneref}></input>
                    </div>
                    {otpValidateBox && 
                        <div>
                        <label>Enter OTP</label>
                        <input type="Enter OTP" ref={otpref}></input>
                        </div>
                        }
                    
                
                    <div className='support-button'>
                        {otpValidateBox ? <Button>Continue</Button> : 
                        <Button type='primary' onClick={()=>updateOtpValidateBox(true)}>Get OTP</Button>}
                        <Button onClick={(e)=>props.alternate(e)} type='button'> Use Email</Button>
                    </div>
                </div>
                <p>or</p>
                <Link to='/createnew'>
                    <Button type="primary">Create New Account</Button>
                </Link>
            </form>
        </div>
    )
}
