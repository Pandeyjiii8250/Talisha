import React, {useRef} from 'react';
import {Button} from 'antd';
import {Link, Redirect} from 'react-router-dom';
import {useAuth} from './Contex/AuthContex';
import './SignUp.css';

export default function Testing(props) {
    const emailref = useRef();
    const passref = useRef();
    const {currentUser, signin} = useAuth();

    async function handelSubmit(e){
        e.preventDefault();
        try{
            await signin(emailref.current.value, passref.current.value);
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
                        <Button type='primary submit'onClick={handelSubmit}>Continue</Button>
                        <Button onClick={(e)=>props.alternate(e)} htmlType='button'> Use Mobile</Button>
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
