import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Account from "../screens/Movies/Account";
import Favourites from "../screens/Movies/Favourites";
import MovieDetails from "../screens/Movies/MovieDetails";
import Movies from "../screens/Movies/Movies";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const AppContainer = () => {
  const MovieStack = () => (
    <Stack.Navigator>
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
