export default class CommunicationHandler {
  constructor(communicationType, handler, nextHandler) {
    this.communicationType = communicationType;
    this.handler = handler;
    this.nextHandler = nextHandler;
  }

  handleCommuniation(communication) {
    if (communication.type !== this.communicationType) {
      if (this.nextHandler) {
        return this.nextHandler.handleCommuniation(communication);
      } else {
        const response = `Communication type: ${communication.type}, could not be handled`;
        console.log(response);
        return response;
      }
    }
    return this.handler(communication);
  }
}
