function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task done");
      }, time);
    });
  }
  
  async function batchProcess() {
    const tasks = [
      simulateTask(500),
      simulateTask(1000),
      simulateTask(700),
      simulateTask(300),
      simulateTask(900),
    ];
  
    const results = await Promise.all(tasks);
    console.log("Kết quả batch:", results);
  }
  batchProcess();