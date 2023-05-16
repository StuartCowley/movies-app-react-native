import { Image, View, StyleSheet, Text } from "react-native";

const MovieCard = ({ title, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text>{title}</Text>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 350,
    marginRight: 8,
  },
});
