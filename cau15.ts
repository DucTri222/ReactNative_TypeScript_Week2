function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task done");
      }, time);
    });
  }
  
  async function run() {
    const result1 = await simulateTask(500);
    console.log("Bước 1:", result1);
  
    const result2 = await simulateTask(500);
    console.log("Bước 2:", result2);
  
    const result3 = await simulateTask(500);
    console.log("Bước 3:", result3);
  }
  run();