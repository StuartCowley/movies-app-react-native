import { Pressable, SafeAreaView, Text } from "react-native";

import { useAuthorisation } from "../../context/AuthorisationContext";
import styles from "../../styles/Account.styles";

export default function Account() {
  const [_, setIsAuthenticated] = useAuthorisation();

  const onPress = () => {
    setIsAuthenticated(false);
  };
  return (
    <SafeAreaView style={styles.accountWrap}>
      <Text style={styles.title}>My Account</Text>
      <Text style={styles.subtitle}>An action packed account page</Text>
      <Pressable style={styles.submitWrapper} onPress={onPress}>
        <Text style={styles.submit}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
}
