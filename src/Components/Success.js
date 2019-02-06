import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export default class Success extends Component {
  continue = e => {
    e.preventDefault();
    // process form, for future api integration
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Success" />
          <h1>Thank you for your submission</h1>
          <p>You will receive an email with further instructions.</p>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}
