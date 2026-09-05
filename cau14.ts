async function multiplyByThree(num: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(num * 3), 1000);
    });
  }
  
  async function run() {
    const result = await multiplyByThree(5);
    console.log(result); // 15
  }
  run();