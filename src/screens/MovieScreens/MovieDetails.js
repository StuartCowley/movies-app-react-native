import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

import { getIndividualMovie } from "../../api/movies";
import styles from "../../styles/MovieDetails.styles";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const navigation = useNavigation();

  const { params } = useRoute();

  useEffect(() => {
    getMovieDetails();
  }, []);

  const onPress = () => {
    navigation.navigate("Movies");
  };

  const getMovieDetails = async () => {
    const result = await getIndividualMovie(params.movieId);
    // TODO: make this data more structured before setting state and style this
    setMovieDetails(result);
  };

  return (
    <View style={styles.movieDetailsContainer}>
      <Text style={styles.title}>{movieDetails.title}</Text>
      <Text style={styles.title}>{movieDetails.releaseDate}</Text>
      <Button title="Go Back" onPress={onPress} />
    </View>
  );
};

export default MovieDetails;
