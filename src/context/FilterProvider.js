import React, { createContext, useReducer, useContext } from "react";

import filterReducer, { initialFilter } from "../reducers/filterReducer";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  return (
    <FilterContext.Provider value={useReducer(filterReducer, initialFilter)}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
