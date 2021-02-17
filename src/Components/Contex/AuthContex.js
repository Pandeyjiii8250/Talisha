import React, {useState, useContext, useEffect} from 'react';
import {auth, provider} from '../../firebase';


const AuthContex = React.createContext();

export function useAuth(){
    return useContext(AuthContex);
}





export function AuthProvider( {children}) {
    const [currentUser, setCurrentUser] = useState(null);
    // const [loading, setLoading] = useState(true);
    
    function signin(email, password){
        return auth.signInWithEmailAndPassword(email, password);
    }

    function signout(){
        return auth.signOut();
    }

    function createAcc(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function googleSignIn(){
        auth.signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    useEffect(()=>{
        const unsubcriber = auth.onAuthStateChanged(user=>{
            console.log(user);
            setCurrentUser(user);
        })

        return unsubcriber;
    }, []);

    const value = {
        currentUser,
        signin,
        signout,
        createAcc,
        googleSignIn
    }

    return (
        <AuthContex.Provider value={value}>
            {children}
        </AuthContex.Provider>
    )
}
