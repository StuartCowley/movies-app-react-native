import { useState } from "react";
import { Text, TextInput, View } from "react-native";

import Button from "../../components/Button";
import { useAuthorisation } from "../../context/AuthorisationContext";
import styles from "../../styles/Login.styles";

const Login = () => {
  const [_, setIsAuthenticated] = useAuthorisation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPress = () => {
    setIsAuthenticated(true);
  };

  return (
    <View style={styles.loginWrap}>
      <Text style={styles.title}>Welcome to YourMovies!</Text>
      <Text style={styles.subtitle}>
        Your personal guide to world of cinema
      </Text>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={onPress} label="Login" />
    </View>
  );
};

export default Login;
