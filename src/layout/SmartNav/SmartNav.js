import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

const navHeight = "40px";

const styles = {
  smartNavContainer: {
    flex: `0 0 ${navHeight}`,
    backgroundColor: "rgba(17,17,17,.9)",
    alignItems: "center",
    color: "lightgray",
    display: "flex"
  },
  brandContainer: {
    color: "lightgray",
    fontFamily: "Revalia",
    padding: "0 10px",
    flex: '0 0 15%'
  },
  brandText: {
    display: "flex",
    alignItems: "center",
    letterSpacing: "1px",
    fontSize: ".9em",
  },
  brackets: {
    color: "#932cfb",
    fontSize: "1.7em"
  },
  theme: {
    display: 'flex',
    padding: '0 10px',
    alignItems: "center",
    marginLeft: 'auto'
  },
  button: {
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    padding: '0 10px',
    display: 'inline-block',
    margin: '5px',
    cursor: 'pointer'
  },
  button_dark: {
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    padding: '0 10px',
    display: 'inline-block',
    color: 'black',
    backgroundColor: 'black',
    margin: '5px',
    cursor: 'pointer'
  }
};

class SmartNav extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.smartNavContainer}>
        <div className={classes.brandContainer}>
          <div className={classes.brandText}>
            <span className={classes.brackets}>{"{ "}</span>
            <span>ejeldes</span>
            <span className={classes.brackets}>{" }"}</span>
          </div>
        </div>
        <div className={classes.theme}>
          <div>Theme: </div>
          <button className={classes.button} />
          <button className={classes.button_dark} />
        </div>
      </div>
    );
  }
}

SmartNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SmartNav);
