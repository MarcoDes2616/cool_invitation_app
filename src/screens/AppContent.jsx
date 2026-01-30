import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "../components/SafeAreaView";
import { EXPO_PUBLIC_API_LOCAL } from "@env";
import { useMain } from "../context/MainContext";
import { useEffect, useState } from "react";
import IntroVideoModal from "../components/modals/IntroVideoModal";
import useLocalStorage from "../hooks/useLocalStorage";

const AppContent = () => {
  const { getKey, getStorage, saveLocal, deleteLocal } = useLocalStorage();
  const { language } = useMain();
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    checkFirstTime();
    // deleteItemJD("u")
    // getAllStorage();
  }, []);

  const getAllStorage = async () => {
    const storage = await getStorage();
    console.log("Storage completo:", storage);
  }

  const deleteItemJD = async (clave) => {
    await deleteLocal(clave);
  };

  const checkFirstTime = async () => {
    try {
      const hasSeenIntro = await getKey("hasSeenIntro");
      if (hasSeenIntro === "false") {
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

  const saveHasSeenIntro = async () => {
    try {
      await saveLocal("hasSeenIntro", "false");
    } catch (error) {
      console.log("Error al guardar en AsyncStorage:", error);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text>{EXPO_PUBLIC_API_LOCAL}</Text>
      <Text>{language}</Text>
      <Text>{showIntro ? "true" : "false"}</Text>
      <TouchableOpacity onPress={saveHasSeenIntro}>
        <Text>Abrir intro</Text>
      </TouchableOpacity>

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
