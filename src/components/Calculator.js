/* eslint no-eval: 0 */
import React from "react";

//Redux
import { connect } from "react-redux";
import {
  setValue,
  setLimitReached,
  setClear,
  setEnter,
  setError,
  setRedo,
  setUndo
} from "../redux/actionCreators/calculatorActions";

const Calculator = props => {
  const {
    value,
    limitReached,
    result,
    error,
    setLimitReached,
    setValue,
    setClear,
    setEnter,
    setError,
    setRedo,
    setUndo,
    onBackStorage
  } = props;
  const handleValue = async val => {
    try {
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
    } catch (err) {
      setError();
      setValue(err.message);
    }
  };

  const handleEnter = async () => {
    try {
      const equals = eval(value);
      setEnter(equals);
      if (value[0] === "/") {
        setError();
        setValue('Unexpected value "/"');
      }
    } catch (err) {
      setError();
      setValue(err.message);
    }
  };

  const handleUndo = () => {
    if (!result && value !== "0" && !error && !limitReached) {
      if (value.length > 0 && value !== "0") {
        let valueToArray = value.split("");
        let end = valueToArray.pop();
        let newValue = valueToArray.join("");
        setUndo(end, newValue);
      }
      if (value.length === 1) {
        setValue("0");
      }
    } else return false;
  };
  const handleRedo = () => {
    if (onBackStorage.length && !result && !error && !limitReached) {
      let previous = onBackStorage.pop();
      let newValue; 
      if (value === "0") {
        newValue = previous;
        setRedo(newValue);
      } else {
        newValue = value + previous;
        setRedo(newValue);
      }
    } else return false;
  };
  return (
    <div className="calculator">
      <div className="frame">
        <div
          className="screen"
          style={
            result && !error
              ? { backgroundColor: "rgb(255,254,237)" }
              : error
              ? { backgroundColor: "#ffb1b1" }
              : { backgroundColor: "#ffffff" }
          }
        >
          <div className="value">
            <div
              className={
                value && !error ? "not-error" : error ? "error" : "not-error"
              }
            >
              {value}
            </div>
          </div>
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
          <button
            className="button op back half-button"
            onClick={() => handleUndo()}
          >
            <i className="fas fa-undo-alt"></i>
          </button>
          <button
            className="button op forward half-button"
            onClick={() => handleRedo()}
          >
            <i className="fas fa-redo-alt"></i>
          </button>
          <button className="button enter full-button" onClick={handleEnter}>
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
    result: state.calculator.result,
    error: state.calculator.error,
    onBackStorage: state.calculator.onBackStorage
  };
};

const mapDispatchToProps = {
  setValue,
  setEnter,
  setClear,
  setLimitReached,
  setError,
  setRedo,
  setUndo
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
