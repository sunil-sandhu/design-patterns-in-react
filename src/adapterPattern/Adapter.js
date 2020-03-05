import NewInterface from "./NewInterface";

// adapter
export default class InterfaceAdapter {
  constructor() {
    this.interface = new NewInterface();
  }

  getName = (firstName, lastName) => {
    const user = {
      firstName,
      lastName
    };
    return this.interface.getUserDetails(user);
  };
}
