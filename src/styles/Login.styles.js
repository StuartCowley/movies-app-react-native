import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "#AAA",
    marginBottom: 16,
  },
  input: {
    borderColor: "#000",
    padding: 8,
    width: "100%",
    borderWidth: 2,
    fontWeight: "bold",
    marginBottom: 8,
  },
  label: {
    justifyContent: "flex-end",
    marginBottom: 8,
  },
});

export default styles;
