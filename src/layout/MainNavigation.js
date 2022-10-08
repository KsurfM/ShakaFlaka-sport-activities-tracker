import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
import { useContext } from "react";

function MainNavigation() {
  const authCtx = useContext(AuthContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>ShakaFlaka Activities</div>
      <nav>
        <ul>
          <li>{!authCtx.isLoggedIn && <Link to="/sign-in">Sign In</Link>}</li>
          <li>
            {authCtx.isLoggedIn && <Link to="/my-entries">My entries</Link>}
          </li>
          <li>
            {authCtx.isLoggedIn && <Link to="/new-entry">New entry</Link>}
          </li>
          <li>
            {authCtx.isLoggedIn && (
              <button onClick={authCtx.logout}>Log out</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
