export default class Observers {
  constructor() {
    this.observers = [];
  }

  add(observer) {
    this.observers.push(observer);
  }

  remove(observerToRemove) {
    this.observers = this.observers.filter((observer) => observer !== observerToRemove);
  }

  get() {
    return this.observers;
  }
}
