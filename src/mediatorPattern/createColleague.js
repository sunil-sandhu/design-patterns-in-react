class Colleague {
  constructor(id, mediator) {
    this.id = id;
    this.mediator = mediator;
    this.messages = [];
  }

  receiveMessage(message) {
    console.log("Module", this.id, "received message", message);
    return this.setMessages(message);
  }

  setMessages(message) {
    this.messages = [...this.messages, message];
  }

  getMessages() {
    return this.messages;
  }

  sendMessage(message, recipientId) {
    if (recipientId) {
      return this.mediator.send(recipientId, message);
    }
    return this.mediator.broadcast(message, this);
  }
}

export function createColleague(id, mediator) {
  const colleague = new Colleague(id, mediator);
  mediator.register(colleague);
  return colleague;
}
