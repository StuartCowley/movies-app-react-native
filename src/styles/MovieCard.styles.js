import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  movieColumnContainer: {
    marginRight: 20,
    width: 150,
    padding: 10,
  },
  movieColumnImage: {
    width: 150,
    height: 200,
    // marginRight: 8,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
    maxWidth: 200,
  },
  plot: {
    maxWidth: 200,
    marginBottom: 8,
  },
  release: {
    maxWidth: 200,
    fontStyle: "italic",
  },
});

export default styles;
