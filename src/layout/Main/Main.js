import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

const styles = {
  mainLayout: {
    flex: '1 1 auto',
    display: 'flex',
    justifyContent: 'center'
  },
  mainContainer: {
    backgroundColor: 'rgba(50,50,50, 0.7)',
    // backgroundColor: '#333',
    content: "",
    width: '80%'
  },
  title: {
    color: "#eee",
  }
};

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.mainLayout}>
        <div className={classes.mainContainer}></div>
      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
