import React, { useState } from "react";
import Subject from "./Subject";
import Observer from "./Observer";

let subject = new Subject();
let observer = new Observer("state");
subject.observe(observer);

const UserOutput = ({ data }) => {
  return <p>{data}</p>;
};

function App() {
  const [innerState, setInnerState] = useState("");

  const updateState = (data) => {
    setInnerState(data);
    subject.add(data);
  };

  const clearState = () => {
    subject.remove(innerState);
  };

  const handleState = (data) => {
    clearState();
    updateState(data);
  };

  return (
    <div className="App">
      <input onChange={(e) => handleState(e.target.value)} />
      <UserOutput data={subject.collection[0]} />
    </div>
  );
}

export default App;
