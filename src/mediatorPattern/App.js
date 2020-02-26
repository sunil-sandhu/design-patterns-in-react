import React, { useState } from "react";
import { createColleague } from "./createColleague";
import Mediator from "./Mediator";
import Colleague from "./Colleague";

const mediator = new Mediator();
const names = ["Sunil", "Jimmy", "Emma"];
const colleagues = names.map((name) => createColleague(name, mediator));

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
