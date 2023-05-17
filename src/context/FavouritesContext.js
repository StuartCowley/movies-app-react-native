import { createContext, useContext, useState } from "react";

const FavesContext = createContext();

export const useFavourites = () => {
  return useContext(FavesContext);
};

export const FavouritesContext = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  return (
    <FavesContext.Provider value={[favourites, setFavourites]}>
      {children}
    </FavesContext.Provider>
  );
};
