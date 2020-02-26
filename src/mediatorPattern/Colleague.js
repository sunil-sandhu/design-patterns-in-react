import React, { useState } from "react";

const Colleague = (props) => {
  const { colleagueObj, name, colleagues, messages, fetchMessages } = props;
  const [messageInput, setMessageInput] = useState("");
  const [selectedColleague, setSelectedColleague] = useState(undefined);

  const handleSendMessage = () => {
    if (selectedColleague === undefined) {
      alert("Please select a colleague");
    } else {
      colleagueObj.sendMessage(messageInput, selectedColleague);
      fetchMessages();
    }
  };

  return (
    <div style={{ marginBottom: "10px", padding: "10px" }}>
      <p>
        <strong>Name: {name}</strong>
      </p>

      <label htmlFor="selectColleague">Send message to a colleague: </label>
      <select
        defaultValue={"default"}
        name="selectColleague"
        onChange={(e) => setSelectedColleague(e.target.value)}>
        <option value={"default"} disabled>
          Select a colleague
        </option>
        <option value={""}>SEND TO EVERYONE</option>
        {colleagues.map((colleague) => (
          <option key={colleague} value={colleague}>
            {colleague}
          </option>
        ))}
      </select>
      <label htmlFor="message"> Write Message:</label>
      <input onChange={(e) => setMessageInput(e.target.value)} name="message"></input>
      <button onClick={handleSendMessage}>SEND MESSAGE</button>

      <p>
        <strong>Your Messages:</strong>
      </p>
      {messages ? messages.map((message, index) => <p key={index}>{message}</p>) : ""}
    </div>
  );
};

export default Colleague;
