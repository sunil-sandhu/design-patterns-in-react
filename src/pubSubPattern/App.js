import React, { useState } from "react";
import User from "./pubSubPattern/User";
import { pubSub } from "./pubSubPattern/pubSub";

const pubsub = pubSub();
const users = ["Sunil", "Jimmy"];

function App() {
  const [notifications, setNotifications] = useState([]);

  const notifyUsers = (fields) => {
    pubsub.publish("notifications", fields);
  };

  let subscription = pubsub.subscribe("notifications", (data) => {
    setNotifications([...notifications, data]);
    subscription.dispose();
  });

  return (
    <div className="App">
      {users.map((user, index) => (
        <User
          key={index}
          thisUser={user}
          notifications={notifications}
          notifyUsers={notifyUsers}
          usersList={users}
        />
      ))}
    </div>
  );
}

export default App;
