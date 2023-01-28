// main supplier for the information

import {useContext} from "react";
import {useReducer} from "react";
import {createContext} from "react";

export const stateContext = createContext();
export const StateProvider = ({reducer, initialState, children}) => (
    <stateContext.Provider value={
        useReducer(reducer, initialState)
    }>
        {children}</stateContext.Provider>
);

// custom Hook tp update the state value
export const useStateValue = () => useContext(stateContext)
