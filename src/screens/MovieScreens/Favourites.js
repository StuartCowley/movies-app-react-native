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
      {favourites.length === 0 ? (
        <Text style={styles.subtitle}>No favourites added</Text>
      ) : (
        <FlatList
          data={favourites}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              imageUrl={item.posterImage}
              isHorizontalLayout
              releaseDate={item.releaseDate}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}
