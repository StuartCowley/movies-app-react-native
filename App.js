import { SafeAreaView, StyleSheet } from "react-native";

import RouteContainer from "./src/routes/RouteContainer";
import Movies from "./src/screens/Movies/Movies";

export default function App() {
  return (
    <RouteContainer>
      <SafeAreaView style={styles.container}>
        <Movies />
      </SafeAreaView>
    </RouteContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
