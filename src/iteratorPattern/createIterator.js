import Iterator from "./Iterator";

export const createIterator = (collection) => {
  const keys = Object.keys(collection);
  let tempArray = [];
  let prop;
  if (typeof collection === "number") {
    collection = collection.toString();
  }
  if (keys.length) {
    for (prop in collection) {
      tempArray.push(collection[prop]);
    }
    collection = tempArray;
  }

  if (collection.length) {
    return new Iterator(collection);
  } else {
    throw Error("Iterator cannot be built from Boolean, null, or undefined");
  }
};
