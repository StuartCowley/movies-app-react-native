import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import AppContainer from "./AppContainer.jsx";
import AuthContainer from "./AuthContainer.jsx";

const RouteContainer = () => {
  const isAuthorised = true;

  return (
    <NavigationContainer>
      {isAuthorised ? <AppContainer /> : <AuthContainer />}
    </NavigationContainer>
  );
};

export default RouteContainer;
