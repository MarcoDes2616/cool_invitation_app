// App.js
import { MainProvider } from "./src/context/MainContext";
import useLocalStorage from "./src/hooks/useLocalStorage";
import AppContent from "./src/screens/AppContent";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const {createFirstStorage} = useLocalStorage();
  return (
    <SafeAreaProvider>
      <MainProvider>
        <AppContent />
      </MainProvider>
    </SafeAreaProvider>
  );
}
