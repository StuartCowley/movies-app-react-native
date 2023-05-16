import { ScrollView, StyleSheet, Text, SafeAreaView } from "react-native";

import { popularMovies } from "./src/api/movies";
import MovieCard from "./src/components/MovieCard/MovieCard";

export default function App() {
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
