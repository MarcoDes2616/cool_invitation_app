import { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../services/axios';
import { defaultsContent } from '../utils/defaultsContent';
import useLocalStorage from '../hooks/useLocalStorage';
import { lan } from '../utils/lenguages';

const { storageKeys, language : defaultLan } = defaultsContent;

const MainContext = createContext();

export const useApp = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de un AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {

  const value = {

  };

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;