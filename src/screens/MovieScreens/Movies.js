import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";

import { getAllMovies, getPopularMovies } from "../../api/movies";
import MovieCard from "../../components/MovieCard";
import styles from "../../styles/Movies.styles";

export default function Movies() {
  // TODO Finish styling for all movies block
  const navigation = useNavigation();
  const [popularMovies, setPopularMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);

  const fetchPopularMovies = async () => {
    const result = await getPopularMovies();
    setPopularMovies(result);
  };

  const fetchAllMovies = async () => {
    const result = await getAllMovies();
    setAllMovies(result);
  };

  useEffect(() => {
    fetchPopularMovies();
    fetchAllMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>MOST POPULAR MOVIES</Text>
        <FlatList
          data={popularMovies}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              imageUrl={item.posterImage}
              onPress={() => {
                navigation.navigate("Movie", { movieId: item.id });
              }}
              storyline={item.storyline}
              releaseDate={item.releaseDate}
            />
          )}
          horizontal
        />
        <Text>All movies</Text>
        <FlatList
          data={allMovies}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              genre={item.genre}
              imageUrl={item.image}
              characters={item.characters}
              releaseDate={item.release}
              isHorizontalLayout
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
