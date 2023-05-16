import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";

import { getPopularMovies } from "./src/api/movies";
import MovieCard from "./src/components/MovieCard/MovieCard";

export default function App() {
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
      <Text>MOST POPULAR MOVIES</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
