import firebase from "firebase/app";
import "firebase/auth";
var firebaseui = require("firebaseui");

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});


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
    signInSuccessUrl: 'http://localhost:3000/',
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

ui.start('#firebaseui-auth-container', uiconfig);

export const auth = app.auth();
export const provider = new firebase.auth.GoogleAuthProvider()
export default app;

