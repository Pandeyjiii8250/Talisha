import React, {useRef, useState} from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import {useAuth} from './Contex/AuthContex';
import './SignUp.css';
import firebase from 'firebase';


const window = {
    recaptchaVerifier: undefined
};

export default function PhoneSignUp(props) {
    const [otpValidateBox, updateOtpValidateBox] = useState(false);
    const phoneref = useRef();
    const otpref = useRef();
    const {auth} = useAuth();

    async function recaptchaVerifierInvisible() {
        function onSignInSubmit() {
          console.log("hear");
        }
      
        // [START auth_phone_recaptcha_verifier_invisible]
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit();
          }
        });
        // [END auth_phone_recaptcha_verifier_invisible]
      }

      function recaptchaRender() {
        /** @type {firebase.auth.RecaptchaVerifier} */
        const recaptchaVerifier = window.recaptchaVerifier;
      
        // [START auth_phone_recaptcha_render]
        recaptchaVerifier.render().then((widgetId) => {
          window.recaptchaWidgetId = widgetId;
        });
        // [END auth_phone_recaptcha_render]
      }

    async function phoneSignInStart(e){
        e.preventDefault();
        updateOtpValidateBox(true);
        console.log(typeof(phoneref));
        recaptchaVerifierInvisible().then(()=>recaptchaRender());
        await firebase.auth().signInWithPhoneNumber(phoneref.current.value, window.recaptchaVerifier)
        .then((confirmationResult) => {
            console.log(confirmationResult)
            window.confirmationResult = confirmationResult;
        }).catch((error) => {
          console.log(error);
        });
    }

    function endphoneSignIn(e){
        e.preventDefault();
        window.confirmationResult.confirm(otpref.current.value).then((result)=>{
            const user = result.user;
        }).catch(err=>{
            console.log(err);
        });

    }

    return (
        <div className='signup'>
            <h1>Sign Up</h1>
            <form method='POST'>
                <div>
                    <div>
                        <label>Phone No.</label>
                        <input type="Enter Phone no." ref={phoneref}></input>
                        <div id='sign-in-button'></div>
                    </div>
                    {otpValidateBox && 
                        <div>
                        <label>Enter OTP</label>
                        <input type="Enter OTP" ref={otpref}></input>
                        </div>
                        }
                    
                
                    <div className='support-button'>
                        {otpValidateBox ? <Button htmlType='button' onClick={(e)=>endphoneSignIn(e)}>Continue</Button> : 
                        <Button type='primary'  onClick={(e)=>phoneSignInStart(e)}>Get OTP</Button>}
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
