function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task done");
      }, time);
    });
  }
  
  async function run() {
    const tasks = [simulateTask(500), simulateTask(1000), simulateTask(700)];
  
    for await (const result of tasks) {
      console.log("Kết quả:", result);
    }
  }
  run();