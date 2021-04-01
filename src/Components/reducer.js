export const initialState = {
    search:[],
    basket:[
        
    ],
    // user:null
}

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price*item.count + amount, 0);

function reducer(state, action){
    switch(action.type){
        case "ADD_ITEM":
            console.log(action.payload.id)
            return{
                ...state,
                basket:[...state.basket, action.payload]
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
        default:
            return(state);
    }
}

export default reducer;