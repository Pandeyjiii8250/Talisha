import React, {useRef} from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import {useAuth} from './Contex/AuthContex';
import './SignUp.css';

export default function Testing() {
    const emailref = useRef();
    const passref = useRef();
    const {signup} = useAuth();

    async function handelSubmit(e){
        e.preventDefault();
        console.log(emailref.current.value, passref.current.value)
        try{
            await signup(emailref.current.value, passref.current.value);
        }catch(err){
            console.log(err);
        }

            
    }
    return (
        <div className='signup'>
            <h1>Sign Up</h1>
            <form onClick={handelSubmit} method='POST'>
                <div>
                <label>Email Address</label>
                <input type="text" ref={emailref}></input>
                </div>
                <div>
                <label>Password</label>
                <input type="password" ref={passref}></input>
                </div>
                <div>
                    <Button type='primary submit'>Continue</Button>
                    <Button> Use Mobile</Button>
                </div>
                <p style={{textAlign:"center"}}>or</p>
                <Link to='/createnew'>
                    <Button type="primary">Create New Account</Button>
                </Link>
            </form>
        </div>
    )
}
