import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";

import AppContainer from "./AppContainer";
import AuthContainer from "./AuthContainer";

const RouteContainer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // TODO finish implementation with context

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppContainer /> : <AuthContainer />}
    </NavigationContainer>
  );
};

export default RouteContainer;
