export default class Observer {
  constructor(name) {
    this.name = name;
  }

  notify(event, data) {
    console.log(`The event was "${event}", the data was`, data, `and I am ${this.name}`);
  }
}
