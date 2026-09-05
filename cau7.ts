function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task done");
      }, time);
    });
  }
  
  const fast = simulateTask(500);
  const slow = simulateTask(3000);
  
  Promise.race([fast, slow]).then((result) => {
    console.log("Promise nhanh nhất:", result);
  });