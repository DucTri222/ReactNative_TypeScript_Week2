function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task done");
      }, time);
    });
  }
  
  async function run() {
    const results = await Promise.all([
      simulateTask(1000),
      simulateTask(1500),
      simulateTask(800),
    ]);
    console.log("Tất cả xong:", results);
  }
  run();