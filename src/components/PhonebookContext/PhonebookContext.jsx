import { createContext, useContext } from "react";

export const PhonebookContext = createContext();

export const usePhonebook = () => useContext(PhonebookContext);