export function pubSub() {
  let subscribers = {};
  return {
    publish: (topic, data) => {
      if (!subscribers[topic]) {
        return;
      }
      subscribers[topic].forEach((callback) => {
        callback(data);
      });
    },
    subscribe: (topic, callback) => {
      let index;

      if (!subscribers[topic]) {
        subscribers[topic] = [];
      }
      index = subscribers[topic].push(callback) - 1;

      return {
        dispose: () => {
          subscribers[topic].splice(index, 1);
        }
      };
    }
  };
}
