import React from "react";
import MainNavigation from "./components/Layout/MainNavigation/MainNavigation";
import ContextProvider from "./store/CartContext/ContextProvider";
import AuthProvider from "./store/AuthContext/AuthProvider";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <ContextProvider>
        <MainNavigation />
      </ContextProvider>
    </AuthProvider>
  );
}

export default App;
