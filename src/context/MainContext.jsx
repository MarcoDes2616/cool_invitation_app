import { createContext, useContext, useState, useEffect } from 'react';
import { Platform } from 'react-native';
import useLocalStorage from '../hooks/useLocalStorage';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [platform, setPlatform] = useState(null);
  const [language, setLanguage] = useState('es');
  const [hasBiometricAuth, setHasBiometricAuth] = useState(false);
  const [operatingSystem, setOperatingSystem] = useState(null);
  const {createFirstStorage, getKey, saveLocal} = useLocalStorage();
  const firsLocalStorageSetup = {
    languages: 'es',
    userToken: '',
    userData: '',
    deviceId: '',
    guestData: "",
    hasSeenIntro: 'false',
  }

  useEffect(() => {
    // Detectar plataforma
    setPlatform(Platform.OS);
    
    // Detectar SO
    setOperatingSystem(Platform.OS === 'ios' ? 'iOS' : 'Android');
    // Inicializar estado de autenticación biométrica
    setHasBiometricAuth(false);
    // createFirstStorage(firsLocalStorageSetup);
    setLenguageByStorage();
  }, []);

  // useEffect(() => {
  //   saveLocal('languages', language);
  // }, [language]);


  const setLenguageByStorage = () => {
    setLanguage(getKey('languages') || 'es');
  };

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
  }

  const value = {
    platform,
    language,
    setLanguage,
    hasBiometricAuth,
    operatingSystem,
    handleChangeLanguage,
  };

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  );
};

export const useMain = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error('useMain debe ser usado dentro de un MainProvider');
  }
  return context;
};