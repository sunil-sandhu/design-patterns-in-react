import React, { useState } from "react";
import Facade from "./Facade";

const salaryCalculator = new Facade();

function App() {
  const [salary, setSalary] = useState("");
  const [title, setTitle] = useState("Junior Engineer");
  const [years, setYears] = useState(0);

  const handleSubmission = () => {
    const userSalary = salaryCalculator.process({ title, years });
    return setSalary(userSalary);
  };

  return (
    <div
      className="App"
      style={{ display: "flex", flexFlow: "column", width: "100%", maxWidth: "300px" }}>
      <h1>Find out your monthly salary</h1>
      <div>
        <label htmlFor="position">Your Job Title</label>
        <select onChange={(e) => setTitle(e.target.value)}>
          <option value="Junior Engineer">Junior Engineer</option>
          <option value="Mid-Level Engineer">Mid-Level Engineer</option>
          <option value="Senior Engineer">Senior Engineer</option>
          <option value="Lead Engineer">Lead Engineer</option>
        </select>
      </div>
      <div>
        <label htmlFor="years">Number of years at the company</label>
        <p>{years}</p>

        <input
          name="years"
          type="range"
          min="0"
          max="15"
          steps="15"
          defaultValue={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div>

      <button onClick={handleSubmission}>CALCULATE SALARY</button>

      <h3>Your salary is: {salary}</h3>
    </div>
  );
}

export default App;
