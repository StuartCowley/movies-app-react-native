import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import { getPopularMovies } from "./src/api/movies";

export default function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const fetchedPopularMovies = await getPopularMovies();
    setPopularMovies(fetchedPopularMovies);
  };

  return (
    <View style={styles.container}>
      <Text>MOST POPULAR MOVIES</Text>
      <FlatList
        data={popularMovies}
        renderItem={({ item }) => (
          <MovieCard image={item.posterImage} title={item.title} />
        )}
        horizontal
      />
      <StatusBar style="auto" />
    </View>
  );
}

const MovieCard = ({ title, image }) => (
  <View>
    <Image
      source={{
        uri: image,
      }}
      style={{ width: 200, height: 350, marginRight: 8 }}
    />
    <Text>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
