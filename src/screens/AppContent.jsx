import { EXPO_PUBLIC_API_LOCAL } from "@env";

const AppContent = () => {
  return (
    <View style={styles.container}>
      <Text>{EXPO_PUBLIC_API_LOCAL}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppContent;

import {
  Text,
  View,
  StatusBar,
  Platform,
  useWindowDimensions,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
