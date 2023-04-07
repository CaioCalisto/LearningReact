import { first, second } from "./perfDecorator2";

class User2 {
  @first()
  @second()
  getUser(id: number) {
    return {
      id: `user:${id}`,
    };
  }
}

(function () {
  const users = new User2();

  const user = users.getUser(22);
  console.log(`Got a new user ${JSON.stringify(user)}`);
})();