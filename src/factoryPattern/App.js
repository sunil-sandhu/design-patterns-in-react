import React from "react";
import FormFactory from "./factoryPattern/formFactory";

function App() {
  return (
    <div className="App">
      <FormFactory type={"contact"} />
    </div>
  );
}

export default App;
