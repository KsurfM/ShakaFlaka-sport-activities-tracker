import { Fragment } from "react";
import { useParams } from "react-router-dom";
import classes from "./EntryDetails.module.css";

const DUMMY_ENTRIES = [
  {
    id: "e1",
    title: "Surfanje u Sabunikama",
    date: "01.10.2022.",
    image:
      "https://www.continentseven.com/c7/wp-content/uploads/2019/07/amado_shaka_podo19.jpg",
    description: "3.7 overpower",
  },
  {
    id: "e2",
    title: "Bajkanje u Grožnjanu",
    date: "03.10.2022.",
    image: "https://cdn.whistler.com/s3/images/header/bike-park-header-og.jpg",
    description: "Good jumping",
  },
  {
    id: "e3",
    title: "Surfanje na Ližnjanu",
    date: "01.10.2022.",
    image:
      "https://www.continentseven.com/c7/wp-content/uploads/2019/07/amado_shaka_podo19.jpg",
    description: "3.4 overpower",
  },
];

const EntryDetails = (props) => {
  const params = useParams();
  const entryId = params.entryId;
  const foundImage = DUMMY_ENTRIES.find((entry) => entry.id === entryId).image;
  const foundTitle = DUMMY_ENTRIES.find((entry) => entry.id === entryId).title;
  const foundDate = DUMMY_ENTRIES.find((entry) => entry.id === entryId).date;
  const foundDescription = DUMMY_ENTRIES.find(
    (entry) => entry.id === entryId
  ).description;

  return (
    <section className={classes.detail}>
      <img src={foundImage} alt="My entry"></img>
      <h1>{foundTitle}</h1>
      <address>{foundDate}</address>
      <p>{foundDescription}</p>
    </section>
  );
};

export default EntryDetails;
