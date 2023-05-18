import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Account from "../screens/MovieScreens/Account";
import Favourites from "../screens/MovieScreens/Favourites";
import MovieDetails from "../screens/MovieScreens/MovieDetails";
import Movies from "../screens/MovieScreens/Movies";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const AppContainer = () => {
  const MovieStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="Movie" component={MovieDetails} />
    </Stack.Navigator>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Movies" component={MovieStack} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default AppContainer;
