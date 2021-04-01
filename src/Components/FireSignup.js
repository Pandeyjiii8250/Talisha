import React, {useEffect} from 'react';
import { startUi } from '../firebase';
import './FireSignup.css'

export default function FireSignup() {

    useEffect(()=>{
        startUi()
    },[])
    return (
        <div id='firebaseui-auth-container'>
            
        </div>
    )
}
