function downloadFile(): Promise<void> {
    return new Promise((resolve) => {
      console.log("Đang tải file...");
      setTimeout(() => {
        console.log("Tải file xong!");
        resolve();
      }, 3000);
    });
  }
  
  downloadFile();
  