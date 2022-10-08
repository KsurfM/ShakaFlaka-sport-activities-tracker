import EntryItem from "./EntryItem";
import classes from "./EntryList.module.css";

const EntriesList = () => {
  const DUMMY_ENTRIES = [
    {
      id: "e1",
      title: "Surfanje u Sabunikama",
      date: "01.10.2022.",
      image:
        "https://www.continentseven.com/c7/wp-content/uploads/2019/07/amado_shaka_podo19.jpg",
    },
    {
      id: "e2",
      title: "Bajkanje u Grožnjanu",
      date: "03.10.2022.",
      image:
        "https://cdn.whistler.com/s3/images/header/bike-park-header-og.jpg",
    },
    {
      id: "e3",
      title: "Surfanje na Ližnjanu",
      date: "01.10.2022.",
      image:
        "https://www.continentseven.com/c7/wp-content/uploads/2019/07/amado_shaka_podo19.jpg",
    },
  ];

  return (
    <ul className={classes.list}>
      {DUMMY_ENTRIES.map((entry) => (
        <EntryItem
          key={entry.id}
          id={entry.id}
          image={entry.image}
          title={entry.title}
          date={entry.date}
        />
      ))}
    </ul>
  );
};

export default EntriesList;
