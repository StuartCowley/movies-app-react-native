import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { getIndividualMovie } from "../../api/movies";
import Button from "../../components/Button";
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

  const getMovieDetails = async () => {
    const result = await getIndividualMovie(params.movieId);
    setMovieDetails(result);
  };

  const addFavourite = () => {
    if (!favourites.includes(movieDetails)) {
      setFavourites((prev) => [...prev, movieDetails]);
    }
  };

  return (
    <ScrollView style={styles.movieDetailsContainer}>
      <Image
        style={styles.mainImage}
        source={{ uri: movieDetails.bannerImage }}
      />
      <View style={styles.container}>
        <View style={styles.headerWrap}>
          <Image
            style={styles.secondaryImage}
            source={{ uri: movieDetails.posterImage }}
          />
          <View>
            <Text style={styles.title}>{movieDetails.title}</Text>
            <Text>{movieDetails.duration}</Text>
          </View>
        </View>

        <View style={styles.detailTextWrap}>
          <View style={styles.inlineText}>
            <Text style={styles.title}>Release date: </Text>
            <Text>{movieDetails.releaseDate}</Text>
          </View>

          <View style={styles.inlineText}>
            <Text style={styles.title}>Director: </Text>
            <Text>{movieDetails.director}</Text>
          </View>

          <View style={styles.inlineText}>
            <Text style={styles.title}>Box office: </Text>
            <Text>{movieDetails.boxOffice}</Text>
          </View>
        </View>

        <View>
          <Text style={[styles.title, styles.titleUppercase]}>Storyline</Text>
          <Text>{movieDetails.storyline}</Text>
        </View>

        <View style={styles.buttonWrap}>
          <Button label="Add to favourites" onPress={addFavourite} />
        </View>
        <View style={styles.buttonWrap}>
          <Button label="Back" onPress={() => navigation.navigate("Movies")} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
