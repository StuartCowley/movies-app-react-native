import { SafeAreaView, StyleSheet } from "react-native";

import Movies from "./src/screens/Movies/Movies";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Movies />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
