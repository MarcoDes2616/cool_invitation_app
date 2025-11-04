import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EXPO_PUBLIC_API_LOCAL } from '@env';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{EXPO_PUBLIC_API_LOCAL}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
