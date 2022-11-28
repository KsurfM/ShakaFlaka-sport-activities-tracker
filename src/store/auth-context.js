import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext({
  token: "",
  userUid: "",
  userEntries: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  deleteEntry: () => {},
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

  const deleteEntryHandler = async (entryId) => {
    await fetch(
      `https://shakaflaka-31a87-default-rtdb.europe-west1.firebasedatabase.app/users/${userUid}/${entryId}.json`,
      {
        method: "DELETE",
      }
    );
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    userUid: userUid,
    deleteEntry: deleteEntryHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
