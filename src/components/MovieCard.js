import { Image, Pressable, Text, View } from "react-native";

import styles from "../styles/MovieCard.styles.js";

const MovieCard = ({
  title,
  imageUrl,
  onPress,
  storyline,
  characters,
  releaseDate,
  isHorizontalLayout,
}) => {
  if (isHorizontalLayout) {
    return (
      <View style={styles.movieRowContainer}>
        <Image style={styles.movieColumnImage} source={{ uri: imageUrl }} />
        <View style={styles.horizontal}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.plot}>{characters}</Text>
          <Text style={styles.release}>{releaseDate}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.movieColumnContainer}>
        <Pressable onPress={onPress}>
          <Image style={styles.movieColumnImage} source={{ uri: imageUrl }} />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.plot}>{storyline}</Text>
            <Text style={styles.release}>{releaseDate}</Text>
          </View>
        </Pressable>
      </View>
    );
  }
};

export default MovieCard;
