import { ScrollView, StyleSheet, Text, SafeAreaView } from "react-native";

import { popularMovies } from "./src/api/movies";
import MovieCard from "./src/components/MovieCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MOST POPULAR MOVIES</Text>
      <ScrollView horizontal>
        <MovieCard
          title={popularMovies[0].title}
          imageUrl={popularMovies[0].posterImage}
        />
        <MovieCard
          title={popularMovies[0].title}
          imageUrl={popularMovies[0].posterImage}
        />
        <MovieCard
          title={popularMovies[0].title}
          imageUrl={popularMovies[0].posterImage}
        />
        <MovieCard
          title={popularMovies[0].title}
          imageUrl={popularMovies[0].posterImage}
        />
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
