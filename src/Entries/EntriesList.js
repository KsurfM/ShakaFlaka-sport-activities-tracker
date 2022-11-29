import { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";
import EntryItem from "./EntryItem";
import classes from "./EntryList.module.css";

const EntriesList = () => {
  const authCtx = useContext(AuthContext);
  const userUid = authCtx.userUid;
  let entryArray;

  const [entryArrayState, setEntryArray] = useState([]);

  const loadEntries = useCallback(async () => {
    entryArray = [];
    const response = await fetch(
      `https://shakaflaka-31a87-default-rtdb.europe-west1.firebasedatabase.app/users/${userUid}.json`
    );
    const data = await response.json();
    if (data) {
      const objectLength = Object.keys(data).length;
      for (let i = 0; i < objectLength; i++) {
        const entryKey = Object.keys(data)[i];
        const helperObject = data[entryKey];
        const finalData = { ...helperObject, id: entryKey };

        entryArray.push(finalData);
        setEntryArray(entryArray);
      }
    } else {
      setEntryArray([]);
    }
  }, []);

  const deleteEntryHandler = async (entryId) => {
    await fetch(
      `https://shakaflaka-31a87-default-rtdb.europe-west1.firebasedatabase.app/users/${userUid}/${entryId}.json`,
      {
        method: "DELETE",
      }
    );

    loadEntries();
  };

  const history = useHistory();

  useEffect(() => {
    loadEntries();
  }, [loadEntries]);

  return (
    <ul className={classes.list}>
      {entryArrayState.map((entry) => (
        <EntryItem
          key={entry.id}
          id={entry.id}
          image={entry.image}
          title={entry.title}
          date={entry.date}
          location={entry.location}
          onDelete={deleteEntryHandler}
        />
      ))}
    </ul>
  );
};

export default EntriesList;
