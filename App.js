import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, SafeAreaView } from "react-native";

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
      <ScrollView horizontal>
        {popularMovies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              imageUrl={movie.posterImage}
              storyline={movie.storyline}
              releaseDate={movie.releaseDate}
            />
          );
        })}
      </ScrollView>
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
