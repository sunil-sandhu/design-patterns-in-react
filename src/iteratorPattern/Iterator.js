class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  next() {
    return this.collection[this.index++];
  }
  isDone() {
    return this.index === this.collection.length;
  }
  reset() {
    this.index = 0;
    return this;
  }
  take(numberOfItems) {
    const newIndex = this.index + numberOfItems;
    const newArr = Array.prototype.slice.call(this.collection, this.index, newIndex);
    this.index = newIndex;
    return newArr;
  }
}

export default Iterator;
