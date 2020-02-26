import React, { useState } from "react";
import handler from "./index";

const handlerFields = [
  {
    type: "call",
    recipient: "",
    ownNumber: ""
  },
  {
    type: "email",
    recipient: "",
    message: ""
  },
  {
    type: "sms",
    recipient: "",
    message: ""
  }
];

function App() {
  const [formData, setFormData] = useState({});
  const [resultData, setResultData] = useState("");

  const handleContactType = (type) => {
    setFormData(...handlerFields.filter((handler) => handler.type === type));
  };

  const handleInput = (field, value) => {
    const newFormData = Object.assign({}, formData, { [field]: value });
    setFormData(newFormData);
  };

  const sendForm = () => {
    const result = handler.handleCommuniation(formData);
    setResultData(result);
  };

  return (
    <div className="App">
      <h1>How would you like to contact someone?</h1>
      <select onChange={(e) => handleContactType(e.target.value)} style={{ border: "1px solid" }}>
        {handlerFields.map((handler) => (
          <option key={handler.type}>{handler.type}</option>
        ))}
      </select>
      <h3>{formData.type ? formData.type : ""}</h3>
      {formData
        ? Object.keys(formData)
            .filter((field) => field !== "type")
            .map((field) => (
              <div key={field} style={{ margin: "4px auto" }}>
                <label htmlFor={field}>{field}:</label>
                <input
                  onChange={(e) => handleInput(field, e.target.value)}
                  name={field}
                  style={{ marginLeft: "2px", border: "1px solid" }}
                />
              </div>
            ))
        : ""}

      <button onClick={sendForm} style={{ border: "1px solid" }}>
        SEND!
      </button>

      <p>{resultData}</p>
    </div>
  );
}

export default App;
