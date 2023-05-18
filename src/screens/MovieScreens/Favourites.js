import { FlatList, SafeAreaView, Text, View } from "react-native";

import Button from "../../components/Button";
import MovieCard from "../../components/MovieCard";
import { useFavourites } from "../../context/FavouritesContext";
import styles from "../../styles/Favourites.styles";

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
            <>
              <MovieCard
                title={item.title}
                imageUrl={item.posterImage}
                isHorizontalLayout
                releaseDate={item.releaseDate}
              />
              <View style={styles.buttonWrap}>
                <Button label="Remove from list" />
              </View>
            </>
          )}
        />
      )}
    </SafeAreaView>
  );
}
