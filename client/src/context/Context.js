import React, { createContext, useEffect, useReducer } from "react";
import { AppReducer, initialState } from "./Reducer";

import Modal from "../components/Modal";
import { fetchFortunes } from "../api/requests";

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    async function initializeData() {
      const fortunes = await fetchFortunes();
      dispatch({
        type: "UPDATE_FORTUNES",
        payload: fortunes,
      });
    }

    initializeData();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
      <Modal state={state} dispatch={dispatch} />
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
