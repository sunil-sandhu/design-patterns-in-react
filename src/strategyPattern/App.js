import React, { useState } from "react";
import Validator from "./validator";
import { emailValidator } from "./emailValidator";
import InputValidator from "./InputValidator";

const validator = new Validator();
validator.selectValidator(emailValidator());

function App() {
  const [isValidInput, setIsValidInput] = useState("");
  const validateInput = (value) => {
    setIsValidInput(validator.validate(value));
  };

  return (
    <div className="App">
      <InputValidator type={"email"} func={validateInput} />
      <p>Is it valid input? {isValidInput.toString()}</p>
    </div>
  );
}

export default App;
