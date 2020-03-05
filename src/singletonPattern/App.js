import React, { useState } from "react";
import { api } from "./API";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(undefined);
  const [messageSent, setMessageSent] = useState(false);

  const sendMessage = async () => {
    const post = await api.postData(message);

    if (post) {
      setMessageSent(post);
      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    }
  };

  const fetchMessage = async () => {
    const fetch = await api.getData("Sunil");
    if (fetch) {
      setResponse(fetch.data.message);
    }
  };

  return (
    <div className="App">
      <button onClick={fetchMessage}>Fetch your messages</button>
      {response ? <p>{response}</p> : <p></p>}
      <label htmlFor="message">Write a Message</label>
      <input name="message" onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send message</button>
      {messageSent ? <p>Your message has been sent!</p> : <p></p>}{" "}
    </div>
  );
}

export default App;
