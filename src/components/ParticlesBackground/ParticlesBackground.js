import Particles from "react-particles-js";
import PropTypes from "prop-types";
import React from "react";
import withStyles from "react-jss";

import particles from "./particles";

const styles = {
  container: {
    background: "linear-gradient(90deg, #111111, #341058)",
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

const ParticlesBackground = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Particles params={particles} height={"100vh"} />
      <div className={classes.overlay} />
    </div>
  );
};

ParticlesBackground.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ParticlesBackground);
