import React from "react";

//components
import Settings from "./components/Settings";
import Calculator from "./components/Calculator";

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
      <h1 className="title">TishG Calculator</h1>
      <Calculator />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bgColor: state.settings.backgroundColor
  };
};

export default connect(mapStateToProps)(App);
