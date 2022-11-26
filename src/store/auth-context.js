import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext({
  token: "",
  userUid: "",
  userEntries: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvier = (props) => {
  const [token, setToken] = useState();
  const [userUid, setUserUid] = useState();
  const history = useHistory();

  useEffect(() => {
    const localToken = localStorage.getItem("idToken");
    if (localToken) {
      setToken(localToken);
    }
    const localUserUid = localStorage.getItem("userUid");
    setUserUid(localUserUid);
  }, []);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    localStorage.clear();
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
