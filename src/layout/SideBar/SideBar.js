import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import FaUser from "../../components/Icons/FaUser";
import FaHome from "../../components/Icons/Home";
import FaSettings from "../../components/Icons/FaSettings";
import FaProgress from "../../components/Icons/FaProgress";
import FaProject from "../../components/Icons/FaProject";
import FaContact from "../../components/Icons/FaContact";
import FaGithub from "../../components/Icons/FaGithub";

import "../../assets/fonts/Revalia-Regular.ttf";

const sideWidth = "60px";

const link = {
  textDecoration: "none",
  color: "grey",
  width: "100%",
  display: "block",
  textAlign: "center",
  fontSize: "1.5em",
  padding: "12px 5px"
};

const styles = {
  sideBarContainer: {
    backgroundColor: "rgba(17,17,17,.9)",
    flex: `0 0 ${sideWidth}`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  listContainer: {
    margin: 0,
    padding: 0,
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  listItem: {
    listStyle: "none"
  },
  link,
  selected: {
    ...link,
    color: "#932cfb"
  },
  brandContainer: {
    color: "lightgray",
    fontFamily: "Revalia",
    textAlign: "center",
    alignSelf: "flex-start",
    flex: "0 0 20%",
    padding: "1em 0",
    margin: '0 auto'
  },
  brandText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: '1px',
    fontSize: '.9em'

  },
  brackets: {
    color: "#932cfb",
    fontSize: "1.7em"
  },
  github: {
    width: "100%",
    alignSelf: "flex-end",
    textAlign: "center",
    flex: "0 0 20%"
  }
};

const SideBar = props => {
  const { classes } = props;
  return (
    <aside className={classes.sideBarContainer}>

      <ul className={classes.listContainer}>
        <li className={classes.listItem}>
          <a className={classes.selected} href="/">
            <FaHome />
          </a>
        </li>
        <li className={classes.listItem}>
          <a className={classes.link} href="/">
            <FaUser />
          </a>
        </li>
        <li className={classes.listItem}>
          <a className={classes.link} href="/">
            <FaSettings />
          </a>
        </li>
        <li className={classes.listItem}>
          <a className={classes.link} href="/">
            <FaProgress />
          </a>
        </li>
        <li className={classes.listItem}>
          <a className={classes.link} href="/">
            <FaProject />
          </a>
        </li>
        <li className={classes.listItem}>
          <a className={classes.link} href="/">
            <FaContact />
          </a>
        </li>
      </ul>
      <div className={classes.github}>
        <a className={classes.link} href="/">
          <FaGithub />
        </a>
      </div>
    </aside>
  );
};

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
