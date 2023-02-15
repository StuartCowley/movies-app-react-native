import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function App() {
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
        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BMWRiZGQ1NDMtODQ2OS00MDlhLWJkZGYtM2ZmNjlhZThjOWRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
          title="Sing 2"
        />
        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg"
          title="Spiderman No Way Home"
        />
        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BMzQ5ZDZhZDItZTNmZi00MWQ0LWJlNDUtZTE4ZWJmODNlM2Y3XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg"
          title="West Side Story"
        />
        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BYzdlMTMyZWQtZWNmMC00MTJiLWIyMWMtM2ZlZDdlYzZhNTc0XkEyXkFqcGdeQXVyMTMzNDE5NDM2._V1_FMjpg_UX1000_.jpg"
          title="House of Gucci"
        />
      </ScrollView>
    </View>
  );
}
