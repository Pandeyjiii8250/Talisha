import React, {useState, useContext, useEffect} from 'react';
import {auth} from '../../firebase';


export const AuthContex = React.createContext();

export function useAuth(){
    return useContext(AuthContex);
}



export function AuthProvider( {children}) {
    const [currentUser, setCurrentUser] = useState(null);

    function signout(){
        return auth.signOut();
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
        setCurrentUser,
        signout
    }

    return (
        <AuthContex.Provider value={value}>
            {children}
        </AuthContex.Provider>
    );
}
