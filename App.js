import { SafeAreaView, StyleSheet } from "react-native";

import { AuthContext } from "./src/context/AuthorisationContext";
import { FavouritesContext } from "./src/context/FavouritesContext";
import RouteContainer from "./src/routes/RouteContainer";
import Movies from "./src/screens/MovieScreens/Movies";

export default function App() {
  return (
    <AuthContext>
      <FavouritesContext>
        <RouteContainer>
          <SafeAreaView style={styles.container}>
            <Movies />
          </SafeAreaView>
        </RouteContainer>
      </FavouritesContext>
    </AuthContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
