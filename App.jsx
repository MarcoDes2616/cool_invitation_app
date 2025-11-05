// App.js
import { MainProvider } from "./src/context/MainContext";
import AppContent from "./src/screens/AppContent";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainProvider>
        <AppContent />
      </MainProvider>
    </SafeAreaProvider>
  );
}
