import React,{ createContext,useReducer } from "react";
import budgetReducer from "./reducers/budgetReducer";
import { budgetInitialState } from "./initialState";

export const GloableContext = createContext({});

export const StateProvider = ({children}) => {
    const [budgetState, budgetDispatch] = useReducer(budgetReducer, budgetInitialState);

    return(
        <GloableContext.Provider value={{budgetDispatch,budgetState}}>
            {children}
        </GloableContext.Provider>
    )
}