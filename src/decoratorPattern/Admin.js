export default class Admin {
  getPermissions() {
    return {
      public: ["read", "write"],
      private: ["read", "write"]
    };
  }
}
