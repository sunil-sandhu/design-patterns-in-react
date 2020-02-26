export default class Mediator {
  constructor() {
    this.colleagues = [];
  }

  register(colleague) {
    this.colleagues.push(colleague);
  }

  send(recipientId, message) {
    this.colleagues.some((colleague) => {
      if (colleague.id === recipientId) {
        return colleague.receiveMessage(message);
      }
      return false;
    });
  }

  broadcast(message, sender) {
    this.colleagues.forEach((colleague) => {
      if (colleague.id !== sender.id) {
        return colleague.receiveMessage(message);
      }
    });
  }
}
