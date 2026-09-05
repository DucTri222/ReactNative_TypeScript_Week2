async function postData(): Promise<any> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Bài học Async",
        body: "Nội dung bài học",
        userId: 1,
      }),
    });
    return response.json();
  }
  
  async function run() {
    const result = await postData();
    console.log(result);
  }
  run();
  