import { SafeAreaView, StyleSheet } from "react-native";

import { AuthContext } from "./src/context/AuthorisationContext";
import RouteContainer from "./src/routes/RouteContainer";
import Movies from "./src/screens/MovieScreens/Movies";

export default function App() {
  return (
    <AuthContext>
      <RouteContainer>
        <SafeAreaView style={styles.container}>
          <Movies />
        </SafeAreaView>
      </RouteContainer>
    </AuthContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
