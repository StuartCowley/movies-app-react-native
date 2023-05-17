import { createContext, useContext, useState } from "react";

const AuthorisationContext = createContext();

export const useAuthorisation = () => {
  return useContext(AuthorisationContext);
};

export const AuthContext = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <AuthorisationContext.Provider
      value={[isAuthenticated, setIsAuthenticated]}
    >
      {children}
    </AuthorisationContext.Provider>
  );
};
