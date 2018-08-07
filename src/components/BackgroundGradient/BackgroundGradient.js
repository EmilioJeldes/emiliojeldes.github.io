import PropTypes from "prop-types";
import React from "react";
import withStyles from "react-jss";

const styles = {
  container: {
    background: "linear-gradient(to top right, #111 20%, #341058)",
    width: "100vw",
    height: "100vh",
    zIndex: "-10",
    position: "absolute",
    top: 0,
    left: 0
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    width: "100vw",
    height: "100vh",
    zIndex: "-8",
    position: "absolute",
    top: 0,
    left: 0
  }
};

const BackgroundGradient = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.overlay} />
    </div>
  );
};

BackgroundGradient.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BackgroundGradient);
