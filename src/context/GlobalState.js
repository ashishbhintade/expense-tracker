import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = JSON.parse(localStorage.getItem("transactions"))
  ? JSON.parse(localStorage.getItem("transactions"))
  : { transactions: [] };

//Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
