export default class User {
  constructor(id) {
    this.id = id;
    this.getPermissions = () => {
      return {
        public: ["read", "write"],
        private: []
      };
    };
  }

  decoratePermissions(decorator) {
    this.getPermissions = decorator.getPermissions;
  }
}
