async function helloAsync(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Hello Async"), 2000);
    });
  }
  
  async function run() {
    const result = await helloAsync();
    console.log(result);
  }
  run();