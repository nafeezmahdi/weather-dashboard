/* eslint-disable react/prop-types */
import { FavouriteContext } from "../context/contextIndex";
import useLocalStorage from "../hooks/useLocalStorage";

export default function FavouriteProvider({ children }) {
  const [favourite, setFavourite] = useLocalStorage("favourites", []);

  // function to add favourite location
  function addFavourite(latitude, longitude, location) {
    setFavourite([
      ...favourite,
      {
        latitude,
        longitude,
        location,
      },
    ]);
  }

  // function to remove favourite location
  function removeFavourite(location) {
    const restFavourites = favourite.filter((fav) => fav.location !== location);

    setFavourite(restFavourites);
  }

  return (
    <FavouriteContext.Provider
      value={{ addFavourite, removeFavourite, favourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}
