import { FlatList, SafeAreaView, Text } from "react-native";

import MovieCard from "../../components/MovieCard";
import { useFavourites } from "../../context/FavouritesContext";
import styles from "../../styles/Favourites.styles";

// TODO Add styling to favourites list

export default function Favourites() {
  const [favourites] = useFavourites();
  return (
    <SafeAreaView style={styles.favouritesWrap}>
      <Text style={styles.title}>Favourites</Text>
      <FlatList
        data={favourites}
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            imageUrl={item.posterImage}
            storyline={item.storyline}
            releaseDate={item.releaseDate}
          />
        )}
      />
    </SafeAreaView>
  );
}
