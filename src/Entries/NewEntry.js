import { useRef } from "react";
import { useHistory } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./NewEntry.module.css";

const NewEntry = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const dateInputRef = useRef();
  const descriptionInputRef = useRef();
  const locationInputRef = useRef();

  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;

    const entrypData = {
      title: enteredTitle,
      image: enteredImage,
      date: enteredDate,
      description: enteredDescription,
      location: enteredLocation,
    };

    props.onAddEntry(entrypData);
    // titleInputRef.current.value = "";
    // imageInputRef.current.value = "";
    // dateInputRef.current.value = "";
    // descriptionInputRef.current.value = "";
    // locationInputRef.current.value = "";

    alert("Entry successfully added");

    history.replace("/my-entries");
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="location">Location</label>
          <input type="text" required id="location" ref={locationInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Date</label>
          <input type="text" required id="date" ref={dateInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Entry</button>
        </div>
      </form>
    </Card>
  );
};

export default NewEntry;
