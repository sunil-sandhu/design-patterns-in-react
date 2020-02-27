import React, { useState } from "react";
import User from "./User";
import Admin from "./Admin";

const user = new User("Sunil");

function App() {
  const [permissions, setPermissions] = useState(user.getPermissions());

  const updatePermissions = () => {
    user.decoratePermissions(new Admin());
    setPermissions(user.getPermissions());
  };

  return (
    <div className="App">
      <p>Permissions</p>
      <button onClick={updatePermissions}>Give user Admin priviledges</button>

      {permissions.private.length ? (
        <div>
          <h3>Admin area</h3>
          <p>All the private stuff!</p>
        </div>
      ) : (
        <div>You do not have access to the Admin Area</div>
      )}
    </div>
  );
}

export default App;
