import { Image, StyleSheet, Text, View } from "react-native";

const MovieCard = ({ title, imageUrl, storyline, releaseDate }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.plot}>{storyline}</Text>
        <Text style={styles.release}>{releaseDate}</Text>
      </View>
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
