import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

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
      <Pressable style={styles.submitWrapper} onPress={onPress}>
        <Text style={styles.submit}>Login</Text>
      </Pressable>
    </View>
  );
};

export default Login;
