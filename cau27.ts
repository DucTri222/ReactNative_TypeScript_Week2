async function fetchWithRetry(url: string, retries: number): Promise<any> {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Lỗi HTTP: " + response.status);
        return await response.json();
      } catch (err) {
        console.log(`Lần thử ${attempt} thất bại`);
        if (attempt === retries) throw err;
      }
    }
  }
  
  async function run() {
    try {
      const data = await fetchWithRetry(
        "https://jsonplaceholder.typicode.com/todos/1",
        3
      );
      console.log(data);
    } catch (err: any) {
      console.log("Thất bại sau nhiều lần thử:", err.message);
    }
  }
  run();