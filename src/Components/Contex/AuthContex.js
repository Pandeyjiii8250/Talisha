import React, {useState, useContext, useEffect} from 'react';
import {auth} from '../../firebase';

const AuthContex = React.createContext();

export function useAuth(){
    return useContext(AuthContex);
}





export function AuthProvider( {children}) {
    const [currentUser, setCurrentUser] = useState();
    // const [loading, setLoading] = useState(true);
    
    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password);
    }

    // function login(email, password){
    //     return auth.signInWithEmailAndPassword(email, password);
    // }

    useEffect(()=>{
        const unsubcriber = auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
            // setLoading(false);
        })

        return unsubcriber;
    }, []);

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContex.Provider value={value}>
            {/* {loading &&  */}
            {children}
        </AuthContex.Provider>
    )
}
