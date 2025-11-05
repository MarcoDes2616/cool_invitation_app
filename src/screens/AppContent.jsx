import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "../components/SafeAreaView";
import { EXPO_PUBLIC_API_LOCAL } from "@env";

const AppContent = () => {
  return (
    <SafeAreaView style={styles.container} >
        <Text>{EXPO_PUBLIC_API_LOCAL}</Text>
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
