import { useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../store/auth-context";
import classes from "./EntryDetails.module.css";

const EntryDetails = (props) => {
  const params = useParams();
  const entryId = params.entryId;
  const authCtx = useContext(AuthContext);
  const userEntries = authCtx.userEntries;
  console.log(userEntries);

  const foundImage = userEntries.find((entry) => entry.id === entryId).image;
  const foundTitle = userEntries.find((entry) => entry.id === entryId).title;
  const foundDate = userEntries.find((entry) => entry.id === entryId).date;
  const foundDescription = userEntries.find(
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
