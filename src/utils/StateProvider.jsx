import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//returns useState value of StateContext to make it very usable
export const useStateProvider = () => useContext(StateContext);