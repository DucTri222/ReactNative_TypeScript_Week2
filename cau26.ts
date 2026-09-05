function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function run() {
    console.log("Bắt đầu chờ...");
    await delay(5000);
    console.log("Đã chờ xong 5 giây!");
  }
  run();