import React, {useRef, useState} from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import {useAuth} from '../Contex/AuthContex';
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

    //this function is to create the recaptcha verification invisible.
    //it takes id as position where recaptcha to render
    async function recaptchaVerifierInvisible() {
        function onSignInSubmit() {
          console.log("hear");
        }
      
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(document.getElementById('sign-in-button'), {
          'size': 'invisible',
          'callback': (response) => {
            onSignInSubmit();
          }
        });
        // .catch(err=>{
        //     console.log(err.message)
        // });
      }

      //this function is used to render recaptcha 
      //it sets a widget id which can be used to reload recaptcha when signin fails
      function recaptchaRender() {

        const recaptchaVerifier = window.recaptchaVerifier;
      
        recaptchaVerifier.render().then((widgetId) => {
          window.recaptchaWidgetId = widgetId;
        });
        // .catch((err)=>console.log(err.message));
      }

    // this function is called then user press the button to get otp.
    // 1. updateOtpDefault state is change to render specific option option
    // 2. all above function is called to establish recaptcha
    // 3. firebase auth method is called where phoneno and recaptcha is passed.
    //      > ON Success- It gives a confirmation result which is then stored and verified after wards.
    //      > ON Error-   Error message is logged.
    async function phoneSignInStart(e){
        e.preventDefault();
        updateOtpValidateBox(true);
        recaptchaVerifierInvisible().then(()=>recaptchaRender());
        await firebase.auth().signInWithPhoneNumber(phoneref.current.value, window.recaptchaVerifier)
        .then((confirmationResult) => {
            console.log(confirmationResult)
            window.confirmationResult = confirmationResult;
        }).catch((error) => {
          console.log(error.code);
          console.log(error.message);
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
                    {!otpValidateBox &&
                    <div>
                        <label>Phone No.</label>
                        <input type="Enter Phone no." ref={phoneref}></input>
                    </div>
                    }
                    {otpValidateBox && 
                        <div>
                        <label>Enter OTP</label>
                        <input type="Enter OTP" ref={otpref}></input>
                        </div>
                        }
                    
                
                    <div className='support-button'>
                        {otpValidateBox ? <Button htmlType='button' onClick={(e)=>endphoneSignIn(e)}>Continue</Button> : 
                        <Button type='primary'  id= "sign-in-button"onClick={(e)=>phoneSignInStart(e)}>Get OTP</Button>}
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
