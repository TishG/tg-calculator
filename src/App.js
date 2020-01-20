import React from "react";

//components
import Settings from "./components/Settings";
import Calculator from "./components/Calculator";

//Redux
import { connect } from "react-redux";

const App = props => {
  const { bgImage } = props;
  const AppStyles = bgImage
    ? { backgroundImage: `url(${bgImage})`, transition: "0.6s background-image ease-in-out", transitionTimingFunction: 'linear', transitionDelay:"0.1s" }
    : { backgroundColor: "rgba(0,0,0,0.6)" };

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
