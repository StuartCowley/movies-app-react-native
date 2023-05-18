import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { getIndividualMovie } from "../../api/movies";
import Button from "../../components/Button";
import { useFavourites } from "../../context/FavouritesContext";
import styles from "../../styles/MovieDetails.styles";

const MovieDetails = () => {
  const [favourites, setFavourites] = useFavourites();
  const [movieDetails, setMovieDetails] = useState({});

  const { params } = useRoute();

  useEffect(() => {
    getMovieDetails();
  }, []);

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
      <Button label="Add to favourites" onPress={addFavourite} />
    </View>
  );
};

export default MovieDetails;
