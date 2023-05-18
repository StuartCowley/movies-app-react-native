import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonWrap: {
    marginTop: 16,
  },
  container: {
    marginHorizontal: 24,
    marginTop: -60,
  },
  detailTextWrap: {
    marginBottom: 24,
  },
  headerWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  inlineText: {
    flexDirection: "row",
  },
  mainImage: {
    height: 360,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  secondaryImage: {
    width: 140,
    height: 240,
    borderRadius: 10,
    marginRight: 24,
  },
  title: {
    fontWeight: "bold",
  },
  titleUppercase: {
    textTransform: "uppercase",
  },
});

export default styles;
