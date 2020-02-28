export default class Team {
  constructor(league, name) {
    this.name = name;
    this.league = league;
  }

  traverseUp() {
    if (this.league) {
      console.log(`${this.name} is a member of ${this.league.name}`);
      this.league.traverseUp();
    } else {
      console.log(`${this.name} is the root node`);
    }
  }

  traverseDown() {
    if (this.teams.length) {
      this.teams.forEach((team) => {
        console.log(`${this.name} is the league of ${team.name}`);
      });
    } else {
      console.log(`${this.name} is a leaf node`);
    }
  }
}
