import React from "react";

//Redux
import { connect } from "react-redux";
import {
  setBGImage,
  setVisibility
} from "../redux/actionCreators/settingsActions";

const Settings = props => {
  const { visible, setVisibility, setBGImage } = props;
  const conditionalButtonStyles = () => {
    return visible
      ? { backgroundColor: "rgba(220,20,60, 0.5)" }
      : { backgroundColor: "rgba(0,0,0, 0.5)" };
  };

  const conditionalButtonText = () => {
    return visible ? "Close" : "Change Background Image"
  }

  const conditionalVisibility = () => {
    return visible ? { display: "block" } : { display: "none" }
  }
  return (
    <div className="settings">
      {/* <button className="btn main not-hovered"><i class="fas fa-cog"></i></button> */}
      <button
        className="btn main hovered"
        style={conditionalButtonStyles()}
        onClick={setVisibility}
        onBlur={setVisibility}
      >
      {conditionalButtonText()}
      </button>
      <div
        className="bg-color-changer"
        style={conditionalVisibility()}
      >
        <div
          className="btn color"
          onClick={() =>
            setBGImage(
              "https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            )
          }
        >
          <div className="box clouds"></div>
          <div className="name">Clouds</div>
        </div>
        <div
          className="btn color"
          onClick={() =>
            setBGImage(
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            )
          }
        >
          <div className="box beach"></div>
          <div className="name">Beach</div>
        </div>
        <div
          className="btn color"
          onClick={() =>
            setBGImage(
              "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            )
          }
        >
          <div className="box city"></div>
          <div className="name">City</div>
        </div>
        <div
          className="btn color"
          onClick={() =>
            setBGImage(
              "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            )
          }
        >
          <div className="box mountains"></div>
          <div className="name">Mountains</div>
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
  setBGImage,
  setVisibility
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
