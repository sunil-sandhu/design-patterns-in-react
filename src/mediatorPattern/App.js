import React, { useState } from "react";
import { createColleague } from "./createColleague";
import Mediator from "./Mediator";

const mediator = new Mediator();
const names = ["Sunil", "Jimmy", "Emma"];
const colleagues = names.map((name) => createColleague(name, mediator));

const Colleague = ({ colleagueObj, name, colleagues, messages, fetchMessages }) => {
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
    <div style={{ border: "1px solid", marginBottom: "10px", padding: "10px" }}>
      <p>
        <strong>{name}</strong>
      </p>
      <div>
        <p>
          <strong>Messages:</strong>
        </p>
        {messages ? messages.map((message, index) => <p key={index}>{message}</p>) : ""}
      </div>
      <label htmlFor="selectColleague">Send message to a colleague</label>
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
      <label htmlFor="message">Write Message</label>
      <input onChange={(e) => setMessageInput(e.target.value)} name="message"></input>
      <button onClick={handleSendMessage}>SEND MESSAGE</button>
    </div>
  );
};

function App() {
  const [messages, setMessages] = useState([]);
  const fetchMessages = () => {
    setMessages(colleagues.map((colleague) => colleague.getMessages()));
  };

  return (
    <div className="App">
      {colleagues.map((colleague, index) => (
        <Colleague
          colleagueObj={colleague}
          key={colleague.id}
          name={colleague.id}
          colleagues={names.filter((person) => person !== colleague.id)}
          messages={messages[index]}
          fetchMessages={fetchMessages}
        />
      ))}
    </div>
  );
}

export default App;
