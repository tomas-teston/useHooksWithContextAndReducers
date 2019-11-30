import React, { createContext, useReducer } from "react";

const initialState = { color: "initialColor" };
export const store = createContext(initialState);

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_GREEN_COLOR":
        return { color: "green" };
      default:
        throw new Error();
    }
  }, initialState);

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};

export const withStoreContext = Component => () => (
  <StateProvider>
    <Component />
  </StateProvider>
);
