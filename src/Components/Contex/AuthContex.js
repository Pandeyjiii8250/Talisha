import React, {useState, useContext, useEffect} from 'react';
import {auth, db} from '../../firebase';
import { useStateValue } from '../StateProvider';


export const AuthContex = React.createContext();

export function useAuth(){
    return useContext(AuthContex);
}



export function AuthProvider( {children}) {
    //this sets the currentUser or return null
    const [currentUser, setCurrentUser] = useState(auth.currentUser);
    const [{basket}, dispatch] = useStateValue()

    function signout(){
        return auth.signOut();
    }

    const setInitBasket = (basketHis)=>{
        basketHis.forEach((item)=>{
            dispatch({
                type:"ADD_ITEM",
                payload:item
            })
        })
        
    }

    function getCartId(){
        var cartId = null
        const getCookie = document.cookie;
        const cookieList = getCookie.split(';')
        cookieList.forEach((item)=>{
            if(item.includes('cartId')){
                cartId = item.split('=')[1]
            }
        })
        return cartId
    }

    function setUserInfo(addressDetail){
        dispatch({
            type:"ADD_USER",
            payload:{
                addDetail:addressDetail
            }
        })
    }

    function setOrderInfo(order){
        if(order.status !== 'constructing'){
            dispatch({
                type:"SET_ORDER",
                payload:{
                    basket:order.basket,
                    orderId:order.orderId,
                    status:order.status
                }
            })
        }
    }

    function setNewUser(){
        // to check if user has cartId or not
        const cartId = getCartId() ? getCartId : null
        db.collection('user').doc(currentUser.uid).set({
            personal:{
                name:currentUser.displayName,
                phone:currentUser.phoneNumber,
                email:currentUser.email
            },
            cartId:null,
            order:{
                orderId:null,
                cartId:cartId,
                phoneNumber:currentUser.phoneNumber,
                status:'constructing'
            },
            address:null
        })
    }

    
    auth.onAuthStateChanged((user)=>{
        setCurrentUser(user)
    })

    function updateBucketFromCartId(){
        // check is user has cartId in cookie and basket length is 0
        if(getCartId() && basket.length === 0){
            const cartId = getCartId()
            // console.log(cartId)
            db.collection('carts').doc(cartId.toString()).get()
            .then((docRef)=>{
                // console.log(docRef.data())
                if(docRef.data()){
                    setInitBasket(docRef.data().basket)
                }
            })
            .catch((e)=>{
                console.log(e)
            })
        }
    }

    function getOldUserInfo(docRef){
        // set user's address in useInfo
        setUserInfo(docRef.data().address)
        //get user orders history
        setOrderInfo(docRef.data().order)
        if(!getCartId()){
            // no cartId in user's device check if in database
            const cartHis = docRef.data().cartId
            if(cartHis){
                // if user has cartId in it's dataBase
                db.collection('carts').doc(cartHis).get()
                .then((docRef)=>{
                    // set the initialState of basket
                    setInitBasket(docRef.data().basket)
                    document.cookie = `cartId=${cartHis};max-age=43200`;
                    // get the orderId and display based on status

                })
                .catch((e)=>{
                    console.log(e)
                })
            }
            else{
                //if user don't have cartId
            }
        }else{
            //user has a cartId in device then update databse cart Id
            
            const cartId = getCartId()
            //we need to see if user is new or old
            db.collection('user').doc(currentUser.uid).set({
                cartId:cartId
            },{merge:true})
        }
    }

    useEffect(()=>{
        //it runs on Mounting of home page
        updateBucketFromCartId()
    },[])

    useEffect(()=>{
        // this will help to getOrder detail save current cartId in firestore  
        if(currentUser != null){
            db.collection('user').doc(currentUser.uid).get()
            .then((docRef)=>{
                // to check if user is old or new
                if(docRef.data()){
                    // user Is old
                    // get userInfo hear
                    getOldUserInfo(docRef)
                        
                }else{
                    // the user is new
                    setNewUser()
                    
                }       
            }    
        )}
    },[currentUser])

    const value = {
        auth,
        currentUser,
        signout
    }

    return (
        <AuthContex.Provider value={value}>
            {children}
        </AuthContex.Provider>
    );
}
