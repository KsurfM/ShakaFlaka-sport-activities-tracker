import { Fragment, useContext } from "react";
import Layout from "./layout/Layout";
import { Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import { Switch } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import MyEntriesPage from "./pages/MyEntriesPage";
import AuthContext from "./store/auth-context";
import NewEntryPage from "./pages/NewEntryPage";
import EntryDetailsPage from "./Entries/EntryDetalis";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <WelcomePage />
          </Route>
          <Route path="/sign-in" exact>
            <SignInPage />
          </Route>
          {authCtx.isLoggedIn && (
            <Route path="/my-entries" exact>
              <MyEntriesPage />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/new-entry" exact>
              <NewEntryPage />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/:entryId" exact>
              <EntryDetailsPage />
            </Route>
          )}
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
