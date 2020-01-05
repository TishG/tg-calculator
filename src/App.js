import React from "react";

//components
import Settings from "./components/Settings";

//Redux
import { connect } from "react-redux";

const App = ({ bgColor }) => {
  //styling
  const AppStyles = {
    backgroundColor: bgColor
  };

  return (
    <div className="app" style={AppStyles}>
      <Settings />
      <h1>tishg calc</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bgColor: state.settings.backgroundColor
  };
};

export default connect(mapStateToProps)(App);
