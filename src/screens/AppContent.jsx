

const AppContent = () => {
  return (
    <View>
      <Text>App Content</Text>
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