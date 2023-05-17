import { SafeAreaView, Text } from "react-native";

import styles from "../../styles/Favourites.styles";

export default function Favourites() {
  return (
    <SafeAreaView style={styles.favouritesWrap}>
      <Text style={styles.title}>Favourites</Text>
    </SafeAreaView>
  );
}
