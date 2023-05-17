import { NavigationContainer } from "@react-navigation/native";

import AppContainer from "./AppContainer";
import AuthContainer from "./AuthContainer";
import { useAuthorisation } from "../context/AuthorisationContext";

const RouteContainer = () => {
  const [isAuthenticated] = useAuthorisation();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppContainer /> : <AuthContainer />}
    </NavigationContainer>
  );
};

export default RouteContainer;
