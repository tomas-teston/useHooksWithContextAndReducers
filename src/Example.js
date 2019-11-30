import React, { useContext } from "react";
import { withStoreContext, store } from "./store";

const ExampleComponent = () => {
  const { state, dispatch } = useContext(store);

  const handleClick = () => {
    dispatch({ type: "SET_GREEN_COLOR" });
  };

  return (
    <div>
      <span>{`Color: ${state.color}`}</span>
      <input type="button" onClick={handleClick} value="set color green" />
    </div>
  );
};

export const Example = withStoreContext(ExampleComponent);
