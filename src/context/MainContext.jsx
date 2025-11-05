import { createContext, useContext, useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [platform, setPlatform] = useState(null);
  const [language, setLanguage] = useState('es');
  const [hasBiometricAuth, setHasBiometricAuth] = useState(false);
  const [operatingSystem, setOperatingSystem] = useState(null);
  
  // Obtener las áreas seguras
  const insets = useSafeAreaInsets();

  // Configuración de áreas seguras
  const safeArea = {
    top: insets.top,
    bottom: insets.bottom,
    left: insets.left,
    right: insets.right,
  };

  useEffect(() => {
    // Detectar plataforma
    setPlatform(Platform.OS);
    
    // Detectar SO
    setOperatingSystem(Platform.OS === 'ios' ? 'iOS' : 'Android');
    
    // Aquí luego agregarás la detección de autenticación biométrica
    // Por ahora lo dejamos en false
    setHasBiometricAuth(false);
  }, []);

  const value = {
    platform,
    language,
    setLanguage,
    hasBiometricAuth,
    operatingSystem,
    safeArea,
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