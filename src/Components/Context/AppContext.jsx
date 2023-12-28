import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [token, setToken]=useState(null)

  const login=(username, authToken)=>{
    setUsername(username)
    setToken(authToken)
    localStorage.setItem("authToken", authToken);
  }
  const logout=()=>{
    setUsername(null)
    setToken(null)
    localStorage.removeItem("authToken");
  }
  return (
    <UserContext.Provider value={{ username, setUsername, logout, login, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};