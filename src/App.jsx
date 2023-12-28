import React, { useContext, useState } from "react";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import {
  UserContext,
  UserContextProvider,
} from "./Components/Context/AppContext";

const App = () => {
  const { username } = useContext(UserContext);
  return (
    <UserContextProvider>
      <div>
        <Routes>
          {username ? (
            <Route path="/" element={<MainPage />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Routes>
      </div>
    </UserContextProvider>
  );
};

export default App;
