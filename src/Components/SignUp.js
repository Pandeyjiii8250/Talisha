import React from 'react'
import './SignUp.css';
import {AuthProvider} from './Contex/AuthContex';
import Testing from './Testing';


export default function SignUp() {
    
    return (
        <AuthProvider>
            <Testing />
        </AuthProvider>
        
    )
}
