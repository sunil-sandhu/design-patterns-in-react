import React, { Fragment, useState } from "react";
import { FormContact } from "./contact";
import { FormRegister } from "./register";

const FormFactory = ({ type }) => {
  const formTypes = {
    contact: FormContact(),
    register: FormRegister()
  };
  const [formState, setFormState] = useState(formTypes[type]);

  const handleStateUpdate = (field, payload) => {
    const oldState = formState;
    const newState = Object.assign(oldState, { [field]: payload });
    setFormState(newState);
  };

  return (
    <form>
      {Object.keys(formTypes[type]).map((field) => (
        <Fragment key={field}>
          <label htmlFor={field}>{field}</label>
          <input name={field} onChange={(e) => handleStateUpdate(field, e.target.value)} />
        </Fragment>
      ))}
    </form>
  );
};

// EXAMPLE OF THIS BEING USED
export default FormFactory;
