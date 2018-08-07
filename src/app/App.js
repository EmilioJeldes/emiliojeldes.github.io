import React, { Component } from "react";
import withStyles from "react-jss";
import PropTypes from "prop-types";

import "normalize.css";
import "./App.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../assets/fonts/Revalia-Regular.ttf";

import BackgroundGradient from "../components/BackgroundGradient/BackgroundGradient";
import SideBar from "../layout/SideBar/SideBar";
import Main from "../layout/Main/Main";
import SmartNav from "../layout/SmartNav/SmartNav";

const styles = {
  appContainer: {
    display: "flex",
    height: "100vh",
    flexDirection: "column"
  },
  "@media (max-width: 576px)": {
    appContainer: {
      flexDirection: "column"
    }
  },
  appLayout: {
    display: "flex",
    height: "100%",
    flex: "1 1 auto"
  }
};
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.appContainer}>
        <BackgroundGradient />
        <SmartNav />
        <div className={classes.appLayout}>
          <SideBar />
          <Main />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
