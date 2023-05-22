import { Text, TouchableOpacity } from "react-native";

import styles from "../styles/Button.styles.js";

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
      <Text style={styles.button}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
