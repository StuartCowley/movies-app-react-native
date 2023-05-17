import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button, Pressable, Text, View } from "react-native";

import { getIndividualMovie } from "../../api/movies";
import { useFavourites } from "../../context/FavouritesContext";
import styles from "../../styles/MovieDetails.styles";

const MovieDetails = () => {
  const [favourites, setFavourites] = useFavourites();
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

  const addFavourite = () => {
    if (!favourites.includes(movieDetails)) {
      setFavourites((prev) => [...prev, movieDetails]);
    }
  };

  return (
    <View style={styles.movieDetailsContainer}>
      <Text style={styles.title}>{movieDetails.title}</Text>
      <Text style={styles.title}>{movieDetails.releaseDate}</Text>
      <Pressable style={styles.submitWrapper} onPress={addFavourite}>
        <Text style={styles.submit}>Add to favourites</Text>
      </Pressable>
      <Button title="Go Back" onPress={onPress} />
    </View>
  );
};

export default MovieDetails;
