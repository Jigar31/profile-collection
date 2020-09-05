import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  submit__button: {
    color: "white",
    backgroundColor: "blue",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    margin: "10px",
  },
  "add-profile-container": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      color: "blue",
    },
  },
  "add-profile__form": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "add-profile__form-field": {
    marginBottom: "20px",
  },
  upload__button: {
    backgroundColor: "blue",
    color: "white",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  "add-profile__form__profile-picture": {
    display: "flex",
  },
  "profile-picture": {
    borderRadius: "50%",
  },
}));

function AddProfile() {
  const classes = useStyles();

  let [username, setUsername] = useState("");
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  let [filename, setFilename] = useState("");
  let [profilePicture, setProfilePicture] = useState("");
  let [bio, setBio] = useState("");

  const showFormFields = () => {
    console.log(username, firstname, lastname, email, filename, bio);
  };

  return (
    <div className={classes["add-profile-container"]}>
      <AppBar position="static">
        <Toolbar>
          <NavLink className={classes.navLink} exact to="/">
            Home
          </NavLink>
          <NavLink className={classes.navLink} exact to="/add-profile">
            Add Profile
          </NavLink>
        </Toolbar>
      </AppBar>
      <h2>Add Profile</h2>
      <form
        className={classes["add-profile__form"]}
        onSubmit={(e) => e.preventDefault()}
      >
        <TextField
          id="username"
          className={classes["add-profile__form-field"]}
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="firstname"
          className={classes["add-profile__form-field"]}
          label="Firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <TextField
          id="lastname"
          className={classes["add-profile__form-field"]}
          label="Lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <TextField
          id="email"
          className={classes["add-profile__form-field"]}
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="bio"
          className={classes["add-profile__form-field"]}
          label="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <img
          src={profilePicture}
          alt="profile"
          className={classes["profile-picture"]}
          width="30%"
          height="30%"
        />
        <span className="add-profile__form__profile-picture">
          <input
            type="file"
            id="profile"
            style={{ display: "none" }}
            onChange={(e) => {
              setFilename(e.target.files[0].name);
              let reader = new FileReader();
              reader.onloadend = (e) => {
                setProfilePicture(reader.result);
              };
              reader.readAsDataURL(e.target.files[0]);
            }}
          />
          <label htmlFor="profile">
            <Button
              variant="contained"
              className={classes["upload__button"]}
              component="span"
            >
              Upload Profile Picture
            </Button>
          </label>
        </span>
        <Button
          variant="contained"
          className={classes["submit__button"]}
          onClick={() => showFormFields()}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddProfile;
