import React from "react";

//Redux
import { connect } from "react-redux";
import {
  setBGColor,
  setVisibility
} from "../redux/actionCreators/settingsActions";

const Settings = props => {
  const { visible, setVisibility, setBGColor } = props;
  return (
    <div className="settings">
      <button className="btn" onClick={setVisibility}>
        {visible ? "Close" : "Change Background Color"}
      </button>
      <div
        className="bg-color-changer"
        style={visible ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        <div
          className="btn color"
          onClick={() => setBGColor("rgb(240, 248, 255)")}
        >
          <div className="box blue"></div>
          <div className="name">Blue</div>
        </div>
        <div
          className="btn color"
          onClick={() => setBGColor("rgb(210, 248, 210)")}
        >
          <div className="box green"></div>
          <div className="name">Green</div>
        </div>
        <div
          className="btn color"
          onClick={() => setBGColor("rgb(255, 233, 236)")}
        >
          <div className="box pink"></div>
          <div className="name">Pink</div>
        </div>
        <div
          className="btn color"
          onClick={() => setBGColor("rgb(230, 230, 250)")}
        >
          <div className="box purple"></div>
          <div className="name">Purple</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    visible: state.settings.visible
  };
};

const mapDispatchToProps = {
  setBGColor,
  setVisibility
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
