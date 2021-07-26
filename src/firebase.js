import firebase from "firebase/app";
import "firebase/auth";

//To use firebase ui 
var firebaseui = require("firebaseui");

//To use database and storage
require("firebase/firestore")
require("firebase/storage");

//initialize the app with firebase credentials
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});

//...............this is still needed to understood
//this is to use firebaseui 
    //the firebaseui config start hear
const uiconfig ={
    // callbacks: {
    //     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    //         // User successfully signed in.
    //         // Return type determines whether we continue the redirect automatically
    //         // or whether we leave that to developer to handle.
    //         return true;
    //       },
    // },
    // signInSuccessUrl: 'http://localhost:3000/',
    signInSuccessUrl: 'https://test-auth-7144a.web.app/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
            forceSameDevice: false,
            // emailLinkSignIn: function() {
            //     return{
            //         url: 'http://localhost:3000/Test',
            //         handleCodeInApp: true
            //     };
            // }
        },
        {
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            defaultCountry: 'IN'
        }
    ],
    tosUrl: 'http://localhost:3000/',
    privacyPolicyUrl: 'http://localhost:3000/'
}

var ui = new firebaseui.auth.AuthUI(firebase.auth());

export const startUi = ()=>{
    ui.start('#firebaseui-auth-container', uiconfig);
}


//This is equivalent to firebase.firestore(). It is used to access database
export var db = app.firestore();

//this below is equivqlent to firebase.auth()
export const auth = app.auth();

export const provider = new firebase.auth.GoogleAuthProvider()
export default app;


