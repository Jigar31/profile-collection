import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navLink: {
    color: "white",
    textDecoration: "none",
    margin: "10px",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div>
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
      <h1>Profile Collection</h1>
    </div>
  );
}

export default Home;
