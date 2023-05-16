import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Account from "../screens/Movies/Account";
import Favourites from "../screens/Movies/Favourites";
import Movies from "../screens/Movies/Movies";

const Tab = createBottomTabNavigator();

const AppContainer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default AppContainer;
