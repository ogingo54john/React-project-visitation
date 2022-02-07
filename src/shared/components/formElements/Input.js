import React from "react";
//useReducer prefarable to use state when managing complex state
import { useReducer } from "react";

import "./Input.css";
import { validate } from "../../util/Validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        //spread operator that create a copy of the old state ob into new ob
        ...state,
        // overight old State
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    default:
      return state;
  }
};

const Input = (props) => {
  //funst that recive an action and recive current state and return new state
  //on change i.e user input.. store and validate inputs
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false
  });
  //event handling i.e accept input from form
  //onChange record input and overight old state
  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators
    });
  };

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        row={props.row3 || 3}
        onChange={changeHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
