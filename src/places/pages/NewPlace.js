import React from "react";

import "./NewPlace.css";
import Input from "../../shared/components/formElements/Input";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="please enter valid text"
      />
    </form>
  );
};

export default NewPlace;
