import React, {useContext, useReducer} from "react";
// import reducer from './reducer';

export const StateContext = React.createContext();

export function  StateProvider({reducer, initialState, children}){
    return(
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

// export function useStateValue(){return useContex(StateContex);};

export function useStateValue(){
    return useContext(StateContext);
}