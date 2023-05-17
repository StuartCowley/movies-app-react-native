import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  accountWrap: {
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
  submitWrapper: {
    marginTop: 16,
    width: "100%",
  },
  submit: {
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    paddingVertical: 16,
    backgroundColor: "red",
    color: "white",
  },
});

export default styles;
