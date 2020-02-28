import React, { useState } from "react";
import League from "./League";
import Team from "./Team";

const premierLeague = new League("Premier League");

function App() {
  const [teamName, setTeamName] = useState("");
  const [teams, setTeams] = useState(premierLeague.teams);
  const addTeamToLeague = () => {
    if (premierLeague.teams.filter((team) => team.name === teamName)) {
      alert("team already exists in this league");
    } else {
      premierLeague.addTeam(new Team(premierLeague.name, teamName));
      setTeams(premierLeague.teams);
      setTeamName("");
    }
  };

  const traverseDown = (teamOrLeague) => {
    teamOrLeague.traverseDown();
  };

  const traverseUp = (teamOrLeague) => {
    teamOrLeague.traverseUp();
  };

  return (
    <div className="App">
      <h3>Premier League Teams</h3>
      {teams.map((team) => (
        <p key={team.name}>{team.name}</p>
      ))}
      <label htmlFor="team">Team Name</label>
      <input name="team" onChange={(e) => setTeamName(e.target.value)} />
      <button onClick={() => addTeamToLeague()}>ADD TEAM</button>
    </div>
  );
}

export default App;
