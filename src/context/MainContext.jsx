import { createContext, useContext, useState, useEffect } from 'react';

const MainContext = createContext();

export const useApp = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de un AppProvider');
  }
  return context;
};

export const MainProvider = ({ children }) => {

  const value = {

  };

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;