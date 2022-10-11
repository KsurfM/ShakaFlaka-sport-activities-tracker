import { useContext } from "react";
import { useHistory } from "react-router-dom";
import NewEntry from "../Entries/NewEntry";
import AuthContext from "../store/auth-context";

const NewEntryPage = () => {
  const authCtx = useContext(AuthContext);
  const userUid = authCtx.userUid;
  const AddEntryHandler = async (data) => {
    await fetch(
      `https://shakaflaka-31a87-default-rtdb.europe-west1.firebasedatabase.app/users/${userUid}.json`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );
  };

  return <NewEntry onAddEntry={AddEntryHandler} />;
};

export default NewEntryPage;
