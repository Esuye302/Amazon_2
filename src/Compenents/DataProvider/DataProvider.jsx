import React, { createContext, useReducer } from "react";
export const DataContext = createContext();

const DataProvider = ({ children,reducer,initialState }) => {
  return (
    //useReducer(reducer, initialState) returns [state,dispatch]
    <DataContext value={useReducer(reducer, initialState)}>
      {children}
    </DataContext>
  );
};

export default DataProvider;
