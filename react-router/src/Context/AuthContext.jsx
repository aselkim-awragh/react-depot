import { useState, createContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const utilisateur = localStorage.getItem("user");
    if (utilisateur) {
      setUser(JSON.parse(utilisateur));
      setIsAuthenticated(true);
      setLoading(false);
    }
  }, []);

  const login = (userInfo) => {
    setIsAuthenticated(true);
    setUser(userInfo);
    localStorage.setItem("user", JSON.stringify(userInfo));
  };
  const register = (userInfo) => {
    localStorage.setItem("user", JSON.stringify(userInfo));
  };
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        login,
        register,
        logout,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
