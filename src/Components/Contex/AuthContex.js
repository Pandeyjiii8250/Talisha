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

    function handleEmailLink(email){
        if (auth.isSignInWithEmailLink(window.location.href) && !!email){
            auth.signInWithEmailLink(email, window.location.href);
        }else{
            auth.sendSignInLinkToEmail(email, {
                url:'http://localhost:3000/SignUp',
                handleCodeInApp: true,
            })
            .then(()=>{
                window.localStorage.setItem("emailForSignIn", email);
            });
        }
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
            // console.log(user);
            setCurrentUser(user);
        })

        return unsubcriber;
    }, []);

    const value = {
        auth,
        currentUser,
        signin,
        signout,
        createAcc,
        googleSignIn,
        handleEmailLink
    }

    return (
        <AuthContex.Provider value={value}>
            {children}
        </AuthContex.Provider>
    )
}
