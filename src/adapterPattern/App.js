import React, { useState } from "react";
import InterfaceAdapter from "./Adapter";

const adapter = new InterfaceAdapter();

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const processUserDetails = () => {
    adapter.getName(firstName, lastName);
  };

  return (
    <div className="App">
      <h3>ACME Old Interface solutions</h3>
      <label htmlFor="firstName">Enter First Name</label>
      <input name="firstName" onChange={(e) => setFirstName(e.target.value)}></input>
      <label htmlFor="lastName">Enter Last Name</label>
      <input name="lastName" onChange={(e) => setLastName(e.target.value)}></input>
      <button onClick={processUserDetails}>PROCESS</button>
    </div>
  );
}

export default App;
