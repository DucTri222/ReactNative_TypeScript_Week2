function randomNumberTask(): Promise<number> {
    return new Promise((resolve, reject) => {
      const num = Math.random();
      setTimeout(() => {
        if (num > 0.3) {
          resolve(num);
        } else {
          reject(new Error("Số quá nhỏ"));
        }
      }, 500);
    });
  }
   
  randomNumberTask()
    .then((result) => console.log("Kết quả:", result))
    .catch((err) => console.log("Lỗi:", err.message));
   