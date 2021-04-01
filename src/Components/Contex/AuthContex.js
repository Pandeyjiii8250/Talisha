import React, {useState, useContext, useEffect} from 'react';
import {auth, db} from '../../firebase';


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
        //it runs 
        const unsubcriber = auth.onAuthStateChanged(user=>{
            //if no user exists user=null
            //throught this every layer can access user
            setCurrentUser(user);
            if(user!=null){
                //as this is promise we have to call it in this way
                db.collection('user').doc(user.uid).get()
                .then((docRef)=>{
                    if(docRef.data()){
                        console.log('hi5');
                    }
                    else{
                        db.collection('user').doc(user.uid).set({
                            'name':user.displayName,
                            'phoneNo':user.phoneNumber,
                            'email':user.email,
                            'uid':user.uid,
                            'test': 'passed'
                        }).then(()=>{
                            console.log("Data added successfully");
                        })
                        .catch((e)=>{
                            console.log(e);
                        })
                    }
                })
                .catch((e)=>{
                    console.log(e)
                })
                
            }else{
                
            }
            
        })

        return unsubcriber;
    }, []);

    const value = {
        auth,
        currentUser,
        // setCurrentUser,
        signout
    }

    return (
        <AuthContex.Provider value={value}>
            {children}
        </AuthContex.Provider>
    );
}
