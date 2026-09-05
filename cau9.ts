function getEvenNumbers(arr: number[]): Promise<number[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evens = arr.filter((n) => n % 2 === 0);
        resolve(evens);
      }, 1000);
    });
  }
  
  getEvenNumbers([1, 2, 3, 4, 5, 6]).then((evens) => console.log(evens));