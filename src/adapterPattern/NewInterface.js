export default class NewInterface {
  getUserDetails(user) {
    return console.log(
      `${user.firstName} ${user.lastName} has been processed through the new interface`
    );
  }
}
