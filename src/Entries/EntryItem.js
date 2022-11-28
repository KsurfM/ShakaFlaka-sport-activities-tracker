import { useHistory } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./EntryItem.module.css";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const EntryItem = (props) => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const showDetailsHandler = () => {
    history.push("/" + props.id);
  };

  const deleteEntryHandler = () => {};

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.date}</address>
          <h3>{props.location}</h3>
        </div>
        <div className={classes.actions}>
          <button className={classes.button_hidden}>X</button>

          <button onClick={showDetailsHandler}>Show Details</button>

          <button className={classes.button_cancel}>X</button>
        </div>
      </Card>
    </li>
  );
};

export default EntryItem;
