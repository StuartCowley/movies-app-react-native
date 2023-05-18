import { Pressable, Text } from "react-native";

import styles from "../styles/Button.styles.js";

const Button = ({ label, onPress }) => {
  return (
    <Pressable style={styles.buttonWrapper} onPress={onPress}>
      <Text style={styles.button}>{label}</Text>
    </Pressable>
  );
};

export default Button;
