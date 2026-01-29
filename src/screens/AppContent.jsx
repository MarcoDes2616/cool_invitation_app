import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "../components/SafeAreaView";
import { EXPO_PUBLIC_API_LOCAL } from "@env";
import { useMain } from "../context/MainContext";
import { useEffect, useState } from "react";
import IntroVideoModal from "../components/modals/IntroVideoModal";
import useLocalStorage from "../hooks/useLocalStorage";

const AppContent = () => {
  const { getKey, getStorage, saveLocal } = useLocalStorage();
  const { language } = useMain();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    checkFirstTime();
    // const intro = getKey("hasSeenIntro");
    // setShowIntro(intro);
  }, []);

  const checkFirstTime = async () => {
    try {
      const hasSeenIntro = await getKey("hasSeenIntro");
      if (!hasSeenIntro) {
        setShowIntro(true);
      }
    } catch (error) {
      console.log("Error al leer AsyncStorage:", error);
    }
  };

  const handleCloseIntro = async () => {
    try {
      await saveLocal("hasSeenIntro", "true");
    } catch (error) {
      console.log("Error al guardar en AsyncStorage:", error);
    }
    setShowIntro(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{EXPO_PUBLIC_API_LOCAL}</Text>
      <Text>{language}</Text>
      <Text>{showIntro ? "true" : "false"}</Text>

      {/* Modal del video */}
      <IntroVideoModal 
        visible={showIntro} 
        onClose={handleCloseIntro} 
      /> 
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default AppContent;
