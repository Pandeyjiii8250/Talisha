import React, {useRef} from 'react';
import {Button} from 'antd';
import {Link, Redirect} from 'react-router-dom';
import {useAuth} from './Contex/AuthContex';
import './SignUp.css';
import googleSvg from '../img/google-symbol.svg';

export default function Testing(props) {
    const emailref = useRef();
    const passref = useRef();
    const {currentUser, signin, googleSignIn, handleEmailLink} = useAuth();

    async function handelSubmit(e){
        e.preventDefault();
        try{
            await signin(emailref.current.value, passref.current.value);
        }catch(err){
            console.log(err);
        }       
    }

    async function handelGoogleSignIn(e){
        e.preventDefault();
        try{
            await googleSignIn();
        }catch(error){
            console.log(error);
        }
    }

    async function handelNewUser(e){
        e.preventDefault();
        try{
            await handleEmailLink(emailref.current.value);
        }catch(err){
            console.log(err);
        }
    }

    if(currentUser){
        return <Redirect to='/' />
    }

    
    return (
        <div className='signup'>
            <h1>Sign In</h1>
            <form method='POST'>
                <div>
                    <div>
                        <label>Email Address</label>
                        <input type="text" ref={emailref}></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" ref={passref}></input>
                    </div>
                
                    <div className="support-button">
                        <Button type='primary submit'onClick={handelNewUser}>Continue</Button>
                        <Button htmlType='button' onClick={(e)=>handelGoogleSignIn(e)}>Signin with<img src={googleSvg} style={{}} alt="google"/></Button>
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
