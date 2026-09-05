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
  
  function fetchWithTimeout(id: number, timeoutMs: number): Promise<User> {
    const apiCall = fetchUser(id);
    const timeout = new Promise<User>((_, reject) => {
      setTimeout(() => reject(new Error("Timeout: quá 2 giây")), timeoutMs);
    });
  
    return Promise.race([apiCall, timeout]);
  }
  
  async function run() {
    try {
      const user = await fetchWithTimeout(1, 2000);
      console.log(user);
    } catch (err: any) {
      console.log(err.message);
    }
  }
  run();