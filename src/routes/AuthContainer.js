import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login/Login";

const Stack = createNativeStackNavigator();

const AuthContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthContainer;
