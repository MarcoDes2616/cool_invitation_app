import { StyleSheet } from "react-native";
import { SafeAreaView } from "./src/components/SafeAreaView";
import { MainProvider } from "./src/context/MainContext";
import AppContent from "./src/navigation/AppContent";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.SafeAreaView}>
        <MainProvider>
          <AppContent />
        </MainProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
})
