// asynchronous programming in javascript 
// using callbacks, promises, async/await and event loop 

// Asynchronous programming in JavaScript is essential for 
// handling tasks that may take some time to complete, 
// such as network requests, file I/O, or user interactions. 

// Flow:
// 1. Call a function that takes some time to complete.
// 2. Continue executing the program without waiting for the function to complete.
// 3. Execute the function's callback when it's finished.

// 1. Callbacks
// A callback is a function that is passed as an argument 
// to another function and is executed when that function's operation is complete.
// Note: Treat a function like an argument and pass it to another function.
function readFileAsync(path, callback) {
  // Simulate reading a file asynchronously
  setTimeout(() => {
    const fileContent = "This is the file content.";
    callback(null, fileContent); // Call the callback with the result
  }, 1000);
}
  
readFileAsync("/path/to/file.txt", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});

// 2. Promises
// Promises provide a more structured way to handle asynchronous operations and avoid callback hell (callback nesting). 
// A Promise represents a value that might be available now or in the future. 
// Promises have three states: pending, resolved (fulfilled), or rejected.
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    // Simulate reading a file asynchronously
    setTimeout(() => {
        const fileContent = "This is the file content.";
        resolve(fileContent); // Resolve the promise with the result
        // In case of an error, use `reject(error)`
    }, 1000);
  });
}

readFileAsync("/path/to/file.txt")
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.error(error);
});

// 3. Async/Await
// The async/await syntax simplifies working with Promises, 
// making asynchronous code look more like synchronous code. 
// An async function returns a Promise implicitly, 
// and await is used to pause execution until the Promise is resolved.
//---------------------------
// Once the program see "await" it will wait for the promise to resolve
// before moving on to the next line.
// so the code will be executed in order. (asynchronous wait for the promise to resolve)
// But the thread will not be blocked, it will be free to do other things.
async function readAndLogFile() {
  try {
    const data = await readFileAsync("/path/to/file.txt");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

readAndLogFile();

// single thread asynchronous non-blocking event loop
// JavaScript's event loop is the core mechanism that allows asynchronous code 
// execution within a single-threaded environment. 
// It continuously checks the call stack and the message queue to determine 
// which tasks to execute next. This enables non-blocking I/O operations 
// while ensuring the single-threaded nature of JavaScript.


// Promise.All
// Use Promise.all when you need to wait for multiple asynchronous tasks to complete 
// and gather their results before proceeding.
// It's particularly useful when you have independent tasks 
// that can run concurrently and you want to optimize for parallelism.
async function fetchAllData() {
    const [data1, data2, data3] = await Promise.all([
      fetchData1(),
      fetchData2(),
      fetchData3(),
    ]);
    // Process data1, data2, and data3
}

// Think (the flow)
async function fetchDataAndSave() {
  const apiUrl1 = 'https://api.example.com/data1';
  const apiUrl2 = 'https://api.example.com/data2';
  const filePath = '/path/to/output.txt';

  try {
    const response1 = await fetch(apiUrl1); // Initiates API call 1
    const data1 = await response1.json(); // Waits for API call 1 to complete

    const response2 = await fetch(apiUrl2); // Initiates API call 2
    const data2 = await response2.json(); // Waits for API call 2 to complete

    const processedData = processData(data1, data2); // Process the data

    try {
      await writeFile(filePath, processedData); // Write data to file
      console.log('Data saved to file successfully.');
    } catch (error) {
      console.error('Error writing to file:', error);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchDataAndSave(); // Call the async function

// 1. The fetchDataAndSave function is called.
// 2. Inside the function, the code execution starts synchronously with the definition of variables apiUrl1, apiUrl2, and filePath.
// 3. The try block is entered, and the first API call (fetch(apiUrl1)) is initiated asynchronously. The JavaScript runtime initiates the request and then continues with the next line of code (const data1 = await response1.json();). At this point, the thread is free and can perform other tasks.
// 4. Meanwhile, the JavaScript runtime continues executing code, which might include handling events, running timers, or executing other tasks from the event queue.
// 5. When the first API call completes, it triggers a callback that resolves the promise returned by fetch(apiUrl1). The response data is then processed (const data1 = await response1.json();).
// 6. The same asynchronous flow happens for the second API call (fetch(apiUrl2)).
// 7. Once both API calls are complete and data is processed, the code proceeds to write the processed data to the file using await writeFile(filePath, processedData);. Again, this operation is asynchronous and doesn't block the main thread.
// 8. While waiting for the file write operation to complete, the JavaScript runtime can continue handling other tasks.
// 9. When the file write operation is finished, it resolves the await promise, and the success message is logged.