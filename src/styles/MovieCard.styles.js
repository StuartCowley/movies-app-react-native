import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  movieColumnContainer: {
    marginRight: 20,
    width: 150,
    padding: 10,
  },
  movieRowContainer: {
    marginRight: 20,
    flexDirection: "row",
    padding: 10,
  },
  horizontal: {
    margin: 8,
  },
  movieColumnImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
    maxWidth: 180,
  },
  plot: {
    maxWidth: 200,
  },
  release: {
    maxWidth: 200,
    fontStyle: "italic",
    marginBottom: 8,
  },
});

export default styles;
