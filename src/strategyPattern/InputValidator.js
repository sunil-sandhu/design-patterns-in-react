import React, { useState } from "react";

const InputValidator = ({ type, func }) => {
  const [userInput, setUserInput] = useState("");
  return (
    <div>
      <label htmlFor="input">{`Validate ${type}`}</label>
      <input name="input" onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={() => func(userInput)}>Validate Input</button>
    </div>
  );
};

export default InputValidator;
