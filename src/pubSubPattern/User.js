import React, { useState } from "react";

const User = (props) => {
  const { notifications, thisUser, notifyUsers, usersList } = props;

  const [userInput, setUserInput] = useState("");

  const [sendMessageTo, setSendMessageTo] = useState("");

  const handleNotifyUsers = () => {
    notifyUsers({ from: thisUser, to: sendMessageTo, message: userInput });
  };

  return (
    <div>
      <select onChange={(e) => setSendMessageTo(e.target.value)}>
        {usersList
          .filter((user) => user !== thisUser)
          .map((user, index) => (
            <option key={index}>{user}</option>
          ))}
      </select>
      <label>Write a message</label>
      <input onChange={(e) => setUserInput(e.target.value)}></input>
      <button onClick={handleNotifyUsers}>Send Message</button>
      <h3>Your Notifications</h3>
      <ul>
        {notifications
          .filter((notification) => notification.from !== thisUser)
          .map((notification, index) => (
            <li key={index}>
              <strong>{notification.from}</strong>: <em>{notification.message}</em>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default User;
