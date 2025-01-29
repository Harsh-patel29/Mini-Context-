import React, { useState } from "react";

import "./App.css";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import UserContextProvider from "./Context/UserContextProvider.jsx";
function App() {
  return (
    <UserContextProvider>
      <h1>React video for context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
