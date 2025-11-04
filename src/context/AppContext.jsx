import { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../services/axios';
import { defaultsContent } from '../utils/defaultsContent';
import useLocalStorage from '../hooks/useLocalStorage';
import { lan } from '../utils/lenguages';

const { storageKeys, language : defaultLan } = defaultsContent;

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de un AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {

  const value = {

  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;