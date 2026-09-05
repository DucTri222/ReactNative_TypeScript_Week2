interface User {
    id: number;
    name: string;
  }
  
  function fetchUser(id: number): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id, name: `User ${id}` });
      }, 1000);
    });
  }
  
  async function fetchUsers(ids: number[]): Promise<User[]> {
    const users: User[] = [];
    for (const id of ids) {
      const user = await fetchUser(id);
      users.push(user);
    }
    return users;
  }
  
  async function run() {
    const users = await fetchUsers([1, 2, 3]);
    console.log(users);
  }
  run();