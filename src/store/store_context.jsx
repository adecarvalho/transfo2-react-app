import { createContext, useReducer } from "react";
import { storeReducer, initState } from "./store_reducer";
import { TYPE_MODELE_KAPP, TYPE_REGLAGE } from "./types";

export const StoreContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initState);

  //
  const setKappModele = (modele) => {
    //
    dispatch({ type: TYPE_MODELE_KAPP, payload: modele });
  };
  //
  const setNewReglage = (reglages) => {
    //todo
    dispatch({ type: TYPE_REGLAGE, payload: reglages });
  };
  //

  const value = {
    theModeleKapp: state.modeleKapp,
    theReglages: state.reglages,
    theMesures: state.mesures,
    setKappModele,
    setNewReglage,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
};
