import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext({
  token: "",
  userUid: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvier = (props) => {
  const [token, setToken] = useState();
  const [userUid, setUserUid] = useState();
  const history = useHistory();
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    history.replace("/");
  };

  const loginHandler = (tokenData, userUid) => {
    setToken(tokenData);
    setUserUid(userUid);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    userUid: userUid,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
