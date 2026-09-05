function failTask(): Promise<never> {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Something went wrong"));
      }, 1000);
    });
  }
  
  async function run() {
    try {
      const result = await failTask();
      console.log(result);
    } catch (err: any) {
      console.log("Bắt lỗi:", err.message);
    }
  }
  run();