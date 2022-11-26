import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../store/auth-context";
import EntryItem from "./EntryItem";
import classes from "./EntryList.module.css";

const EntriesList = () => {
  const authCtx = useContext(AuthContext);
  const userUid = authCtx.userUid;
  let entryArray = [];

  const [entryArrayState, setEntryArray] = useState([]);

  const loadEntries = useCallback(async () => {
    const response = await fetch(
      `https://shakaflaka-31a87-default-rtdb.europe-west1.firebasedatabase.app/users/${userUid}.json`
    );
    const data = await response.json();
    console.log(data);

    const objectLength = Object.keys(data).length;
    for (let i = 0; i < objectLength; i++) {
      const entryKey = Object.keys(data)[i];
      const helperObject = data[entryKey];
      const finalData = { ...helperObject, id: entryKey };

      entryArray.push(finalData);

      setEntryArray(entryArray);
      authCtx.userEntries = entryArray;
    }
    console.log(authCtx.userEntries);
  }, []);

  useEffect(() => {
    console.log("useffect");
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
        />
      ))}
    </ul>
  );
};

export default EntriesList;
