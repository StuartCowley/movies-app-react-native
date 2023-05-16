import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";

import { getPopularMovies } from "../../api/movies";
import MovieCard from "../../components/MovieCard";
import styles from "../../styles/Movies.styles";

export default function Movies() {
  const [popularMovies, setPopularMovies] = useState([]);

  const fetchPopularMovies = async () => {
    const result = await getPopularMovies();
    setPopularMovies(result);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MOST POPULAR MOVIES</Text>
      <FlatList
        data={popularMovies}
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            imageUrl={item.posterImage}
            storyline={item.storyline}
            releaseDate={item.releaseDate}
          />
        )}
        horizontal
      />
    </SafeAreaView>
  );
}
