//This is of no Use currently...


import React, {createRef} from 'react';
import './SignUp';
import  {Link, Redirect} from 'react-router-dom';
import {Button} from 'antd';
import {useAuth} from './Contex/AuthContex';
import googleSvg from '../img/google-symbol.svg';

function CreateAcc() {
    const emailref =  createRef();
    const newpassref =  createRef();
    const confirmref = createRef();
    const nameref = createRef();
    const {currentUser, createAcc, googleSignIn, handleEmailLink} = useAuth();

    async function handleNewUser(e){
        e.preventDefault();
        try{
            await handleEmailLink(emailref.current.value);
        }catch(err){
            console.log(err);
        }
        // if (confirmref.current.value === newpassref.current.value){
        //     console.log('hellow');
        //     try{
        //         // await createAcc(emailref.current.value, newpassref.current.value);
        //         console.log(window.location.href);
        //         await createEmailLink(emailref.current.value, {
        //             url:"http://localhost:3000/createnew",
        //             handleCodeInApp: true
        //         })
        //         .then(()=>{
        //             currentUser.updateProfile({
        //             displayName:nameref.current.value
        //         });
        //         window.localStorage.setItem("emailForSignIn", emailref.current.value);
        //         })
        //     }catch(err){
        //         console.log(err);
        //     }
        //     currentUser.updateProfile({
        //         displayName:nameref.current.value
        //     })
            
        }
    
    async function handelGoogleUser(e){
        e.preventDefault();
        try{
            await googleSignIn();
        }catch(err){
            console.log(err);
        }
    }
    // if(currentUser){
    //     return <Redirect to='/' />
    // }


    return (
        <div className='signup'>
            <h1>Create New Account</h1>
            <form method="POST">
            <div>
                <div>
                    <label>Enter Name</label>
                    <input type='text' ref={nameref}></input>
                </div>
                <div>
                    <label>Enter Email</label>
                    <input type='email' ref={emailref}></input>
                </div>
                <div>
                    <label>New Password</label>
                    <input type="password" ref={newpassref}></input>
                </div>
                <div>
                    <label>Retype password</label>
                    <input type='password' ref={confirmref}></input>
                </div>
                <div className='support-button'>
                    <Button type='primary' onClick={(e)=>handleNewUser(e)}>Continue</Button>
                    <Link to="/SignUp"><Button htmlType="button">Back to Sign In</Button></Link>
                </div>
            </div>
                <p>or</p>
                <Button htmlType="button" onClick={(e)=>{handelGoogleUser(e)}}>Signin with<img src={googleSvg} style={{}} alt="google"/></Button>
            </form>
        </div>
    );
}

export default CreateAcc
