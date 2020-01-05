import React from "react";

//Redux
import { connect } from "react-redux";
import {
  setValue,
  setLimitReached,
  setClear,
  setEnter
} from "../redux/actionCreators/calculatorActions";

const Calculator = props => {
  const {
    value,
    limitReached,
    setLimitReached,
    setValue,
    setClear,
    setEnter,
    result
  } = props;
  const handleValue = val => {
    if (value.length <= 35) {
      let newValue;
      if (value.length === 1 && value === "0") {
        newValue = val;
        setValue(newValue);
      } else {
        newValue = value + val;
        setValue(newValue);
      }
    }
    if (value.length > 35) {
      setLimitReached();
    }
  };
  return (
    <div className="calculator">
      <div className="frame">
        <div
          className="screen"
          style={
            result
              ? { backgroundColor: "#e5fbe5" }
              : { backgroundColor: "#ffffff" }
          }
        >
          <div className="value">{value}</div>
          <small
            style={limitReached ? { display: "block" } : { display: "none" }}
            className="limit-reached"
          >
            Maximum Limit Reached
          </small>
        </div>
        <div className="calc-btns-container">
          <button className="button op" onClick={() => handleValue("+")}>
            +
          </button>
          <button className="button op" onClick={() => handleValue("-")}>
            -
          </button>
          <button className="button op" onClick={() => handleValue("*")}>
            *
          </button>
          <button className="button op" onClick={() => handleValue("(")}>
            (
          </button>
          <button className="button op" onClick={() => handleValue("/")}>
            /
          </button>
          <button className="button op" onClick={() => handleValue(")")}>
            )
          </button>
          <button className="button op" onClick={() => handleValue(".")}>
            .
          </button>
          <button className="button" onClick={() => handleValue("1")}>
            1
          </button>
          <button className="button" onClick={() => handleValue("2")}>
            2
          </button>
          <button className="button" onClick={() => handleValue("3")}>
            3
          </button>
          <button className="button" onClick={() => handleValue("4")}>
            4
          </button>
          <button className="button" onClick={() => handleValue("5")}>
            5
          </button>
          <button className="button" onClick={() => handleValue("6")}>
            6
          </button>
          <button className="button" onClick={() => handleValue("7")}>
            7
          </button>
          <button className="button" onClick={() => handleValue("8")}>
            8
          </button>
          <button className="button" onClick={() => handleValue("9")}>
            9
          </button>
          <button className="button clear" onClick={() => setClear()}>
            Clear
          </button>
          <button className="button" onClick={() => handleValue("0")}>
            0
          </button>
          <button className="button enter" onClick={() => setEnter()}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    value: state.calculator.value,
    limitReached: state.calculator.limitReached,
    result: state.calculator.result
  };
};

const mapDispatchToProps = {
  setValue,
  setEnter,
  setClear,
  setLimitReached
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
