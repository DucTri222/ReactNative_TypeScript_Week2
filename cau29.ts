function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task done");
      }, time);
    });
  }
  
  async function queueProcess() {
    const times = [500, 1000, 700, 300, 900];
    const results: string[] = [];
  
    for (const time of times) {
      const result = await simulateTask(time);
      results.push(result);
      console.log(`Đã xử lý task ${time}ms`);
    }
  
    console.log("Kết quả queue:", results);
  }
  queueProcess();