import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../store/auth-context";
import EntryItem from "./EntryItem";
import classes from "./EntryList.module.css";

const EntriesList = () => {
  const authCtx = useContext(AuthContext);
  const userUid = authCtx.userUid;
  let entryArray = [];

  const [entryArrayState, setEntryArray] = useState([]);

  const DUMMY_ENTRIES = [
    {
      id: "e1",
      title: "Surfanje ",
      date: "01.10.2022.",
      image:
        "https://www.continentseven.com/c7/wp-content/uploads/2019/07/amado_shaka_podo19.jpg",
      description: "3.7 overpower",
      location: "Sabunike",
    },
    {
      id: "e2",
      title: "Bajkanje ",
      date: "03.10.2022.",
      image:
        "https://cdn.whistler.com/s3/images/header/bike-park-header-og.jpg",
      description: "Good jumping",
      location: "Grožnjan",
    },
    {
      id: "e3",
      title: "Surfanje",
      date: "01.10.2022.",
      image:
        "https://www.continentseven.com/c7/wp-content/uploads/2019/07/amado_shaka_podo19.jpg",
      description: "3.4 overpower",
      location: "Ližnjan",
    },
  ];

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
      console.log(finalData);
      setEntryArray(entryArray);
    }
    console.log(entryArray);
  }, []);

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
        />
      ))}
    </ul>
  );
};

export default EntriesList;
