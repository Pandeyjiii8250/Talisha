import React from 'react';
import './SignUp';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Button} from 'antd';

function CreateAcc() {
    return (
        <div className='signup'>
            <h1>Create New Account</h1>
            <form>
                <div>
                    <label>Enter Name</label>
                    <input type='email'></input>
                </div>
                <div>
                    <label>Enter Mobile</label>
                    <input type='number'></input>
                </div>
                <div>
                    <label>New Password</label>
                    <input type="password"></input>
                </div>
                <div>
                    <label>Retype password</label>
                    <input type='password'></input>
                </div>
                <Button>Continue</Button>
                <p>or</p>
                <Button>Sign Up</Button>
            </form>
        </div>
    );
}

export default CreateAcc
