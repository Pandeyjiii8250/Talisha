

export const initialState = {
    //orders Info if placed
    orderInfo:{
        orderId:null,
        orderBasket:[],
        status:null,
        orderAdd:{}
    },
    basket:[],
    //userInfo which is use as checkout
    userInfo:{
        address:null
    }
}




export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price*item.count + amount, 0);

function reducer(state, action){
    switch(action.type){
        case "ADD_ITEM":
            console.log(action.payload.id)
            let checkBasket = [...state.basket]
            const checkPos = checkBasket.findIndex(
                (basketItem)=>basketItem.id ===action.payload.id
            )
            if(checkPos>=0){
                checkBasket[checkPos].count += 1
                return{
                    ...state,
                    basket:checkBasket
                }
            }else{
                return{
                    ...state,
                    basket:[...state.basket, action.payload]
                }    
            }
            
        case "DEL_ITEM":
            console.log(action.payload.id)
            let newBasket=[...state.basket]
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id===action.payload.id)
            if (index>=0){
                newBasket.splice(index,1);

            }else{
                console.warn("no product with that id")
            }

            return {...state,
                basket:newBasket
            }
        case "ADD_COUNT":
            let modifyBasket = [...state.basket]
            const pos = state.basket.findIndex(
                (basketItem)=>basketItem.id===action.payload.id)
            if(pos>=0){
                modifyBasket[pos].count += 1
            }else{
                console.log("No item found");
            }
            return {
                ...state,
                basket: modifyBasket
            }
        
        case "DEL_COUNT":
            let delCountBasket = [...state.basket]
            const delPos = delCountBasket.findIndex(
                (basketItem)=>basketItem.id ===action.payload.id
            )
            if(delPos>=0){
                delCountBasket[delPos].count -= 1
            }else{
                console.log("No item")
            }
            return{
                ...state,
                basket:delCountBasket
            }
        case "ADD_USER":
            console.log(action.payload.addDetail)
            return {
                ...state,
                userInfo:{
                    address:action.payload.addDetail
                }
            }
        case "DEL_CART":
            return{
                ...state,
                basket:action.payload.basket
            }
        case "SET_ORDER":
            // console.log(action.payload.orderAdd)
            return{
                ...state,
                orderInfo:{
                    orderId:action.payload.orderId,
                    orderBasket:action.payload.basket,
                    status:action.payload.status,
                    orderAdd:action.payload.orderAdd
                }
            }
        case "NEW_BASKET":
            return{
                ...state,
                basket:action.payload.newBasket
            }
        default:
            return(state);
    }
}

export default reducer;