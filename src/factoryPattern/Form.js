import React, { useState, Fragment } from "react";
import { FormFactory } from "./FormFactory";

const form = FormFactory("contact", {});

const Form = () => {
  const [formState, setFormState] = useState(
    // formTypes[type]
    form
  );
  console.log(formState);

  const handleStateUpdate = (field, payload) => {
    const oldState = formState;
    const newState = Object.assign(oldState, { [field]: payload });
    setFormState(newState);
    console.log(formState);
  };

  return (
    <form>
      {Object.keys(formState).map((field) => (
        <Fragment key={field}>
          <label htmlFor={field}>{field}</label>
          <input name={field} onChange={(e) => handleStateUpdate(field, e.target.value)} />
        </Fragment>
      ))}
    </form>
  );
};

export default Form;
