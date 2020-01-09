import React from "react";

//components
import Settings from "./components/Settings";
import Calculator from "./components/Calculator";

//Redux
import { connect } from "react-redux";

const App = props => {
  const { bgImage } = props;
  const AppStyles = {
    backgroundImage: `url(${bgImage})`
  };

  return (
    <div className="app" style={AppStyles}>
      <div className="overlay">
      <Settings />
      <h1 className="title">TishG Calculator</h1>
      <Calculator />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bgImage: state.settings.backgroundImage
  };
};

export default connect(mapStateToProps)(App);
