/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

export let RegFormContext = createContext();

export const RegFormProvider = ({ children, value }) => {
  return (
    <RegFormContext.Provider value={{value}}>{children}</RegFormContext.Provider>
  );
};

export const UseRegContext = () => {
    const RegForm = useContext(RegFormContext);
    if (!RegForm) {
      throw new Error("useRegForm must be used within a RegFormProvider");
    }
    return RegForm;
}