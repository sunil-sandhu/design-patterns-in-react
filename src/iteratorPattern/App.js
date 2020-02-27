import React, { useState, useEffect } from "react";
import { createIterator } from "./createIterator";

const contacts = [
  { name: "Sunil", email: "sunil@email.com" },
  { name: "Jimmy", email: "jimmy@email.com" },
  { name: "Ilaria", email: "ilaria@email.com" },
  { name: "Jade", email: "jade@email.com" },
  { name: "Laura", email: "laura@email.com" },
  { name: "Bruce", email: "bruce@email.com" }
];

const contactsIterator = createIterator(contacts);

const ContactResponder = () => {
  const [message, setMessage] = useState("");
  const [person, setPerson] = useState({});

  useEffect(() => {
    getNextPerson();
  }, []);

  const sendMessage = () => {
    console.log(`
        message: "${message}",
        name: ${person.name},
        email: ${person.email}
    `);
  };

  const getNextPerson = () => {
    setPerson(contactsIterator.next());
  };

  const handleSendMessage = () => {
    sendMessage(person);
    getNextPerson();
    setMessage("");
  };

  return (
    <div>
      <p>Message to: {person.name}</p>
      <input value={message} onChange={(e) => setMessage(e.target.value)}></input>
      <button onClick={handleSendMessage}>Send message</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ContactResponder />
    </div>
  );
}

export default App;
