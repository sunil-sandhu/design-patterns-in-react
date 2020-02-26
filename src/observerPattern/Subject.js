import Observers from "./Observers";

export default class Subject {
  constructor(items) {
    this.observers = new Observers();
    this.collection = items || [];
  }

  observe(observer) {
    this.observers.add(observer);
  }

  unObserve(observer) {
    this.observers.remove(observer);
  }

  notify(event, data) {
    this.observers.get().forEach((observer) => observer.notify(event, data));
  }

  add(item) {
    this.collection.push(item);
    this.notify("added", item);
  }

  remove(itemToRemove) {
    this.collection = this.collection.filter((item) => {
      if (item !== itemToRemove) {
        return true;
      }
      this.notify("removed", item);
      return false;
    });
  }
}
