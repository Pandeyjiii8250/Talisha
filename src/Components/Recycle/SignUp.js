import React, {useState} from 'react'
import './SignUp.css';
import Testing from './Testing';
import PhoneSignUp from './PhoneSignUp';


export default function SignUp() {
    const [mobileOpt, setMobile] = useState(false);
    
    function updateMobile(event){
        setMobile(prevs=> !prevs);
        event.preventDefault();
    }
    return (
            <div>
                {mobileOpt ? 
                <PhoneSignUp alternate={updateMobile}/> :
                <Testing alternate={updateMobile}/>
                }
            </div>
    )
}
