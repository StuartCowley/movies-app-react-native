import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function App() {
  const MovieCard = () => (
    <View>
      <Image
        source={{
          uri: "https://m.media-amazon.com/images/M/MV5BMWRiZGQ1NDMtODQ2OS00MDlhLWJkZGYtM2ZmNjlhZThjOWRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
        }}
        style={{ width: 200, height: 350, marginRight: 8 }}
      />
      <Text>Sing 2</Text>
    </View>
  );

  return (
    <View>
      <Text>MOST POPULAR MOVIES</Text>
      <ScrollView horizontal>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </ScrollView>
    </View>
  );
}
