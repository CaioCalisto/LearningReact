import { timing, logTiming, important } from "./perfDecorator";

const delay = <T>(time: number, data: T): Promise<T> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, time)
  );

@logTiming
class Users {
  @timing()
  async getUsers() {
    return await delay(2000, []);
  }

  @timing()
  async getUser(@important id: number) {
    return await delay(50, {
      id: `user:${id}`,
    });
  }
}

(async function () {
  const users = new Users();

  const user = await users.getUser(22);
  console.log(`Got ${JSON.stringify(user)}`);

  await users.getUser(42);

  await users.getUsers();

  // @ts-ignore
  users?.printTimings()
})();

// To test, run this command
// npx ts-node index.ts