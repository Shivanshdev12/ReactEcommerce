import React, { useContext, useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
    const [token, setToken] = useState(null);
    const isLoggedIn = !!token;
    const loginHandler = (tokenId, email) => {
        setToken(tokenId);
        localStorage.setItem("token", tokenId);
        localStorage.setItem("email", email);
    }
    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem("token", null);
    }
    const authContext = {
        token: token,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return (<AuthContext.Provider value={authContext}>
        {props.children}
    </AuthContext.Provider>)
}

export default AuthProvider;