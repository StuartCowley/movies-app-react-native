import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";

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

  const MovieCard = ({ image, title }) => (
    <View>
      <Image
        source={{ uri: image }}
        style={{ width: 200, height: 350, marginRight: 8 }}
      />
      <Text>{title}</Text>
    </View>
  );

  return (
    <View>
      <Text>MOST POPULAR MOVIES</Text>
      <ScrollView horizontal>
        {popularMovies.map((popularMovie) => (
          <MovieCard
            key={popularMovie.title}
            image={popularMovie.posterImage}
            title={popularMovie.title}
          />
        ))}
      </ScrollView>
    </View>
  );
}
