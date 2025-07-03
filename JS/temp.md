
# Asynchronous Programming in JavaScript
Asynchronous programming allows JavaScript to perform **non-blocking operations**, such as **fetching data from a server**, **reading files**, or **waiting for a timer**, without stopping the execution of other code.

## Key Concepts:

* **Synchronous** code runs **line by line**, blocking the next line until the current one finishes.
* **Asynchronous** code **does not block** the main thread and uses:

  * **Callbacks**
  * **Promises**
  * **`async/await`**

## Why it’s used:

JavaScript is **single-threaded** (JavaScript is single-threaded means that it executes one operation at a time, in a single sequence of instructions (one after another) on the main thread.), so async code helps handle **I/O tasks** like network requests, timers, and file reads efficiently **without freezing the UI**.

## Common async operations:

* `setTimeout()`, `setInterval()`
* `fetch()` (for API calls)
* File reads in Node.js

---

# File Handling in JavaScript

File Manipulation in JavaScript refers to the ability to read, write, upload, or process files either in the browser (client-side) or on the server (using Node.js), depending on the environment.




### In Browser (Client-Side):

You can't read/write files on a user's system directly for security reasons. But you can:

* Read user-uploaded files (e.g., PDFs, images) via `<input type="file">`
* Use the **FileReader API** to read content

**Example**:

```js
const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        console.log(reader.result); // file content
    };
    reader.readAsText(file);
});
```

---

###  In Node.js (Server-Side):

Node.js uses the **`fs` (File System)** module.

**Example**:

```js
const fs = require('fs');

// Reading a file asynchronously
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

---

# DOM Manipulation in JavaScript

DOM (Document Object Model) manipulation means using JavaScript to **access**, **change**, **add**, or **remove** HTML elements and attributes dynamically on a webpage.

## Why it’s important:

It allows you to make your web pages **interactive** and **responsive to user actions** (like clicks, input, scrolls).

## Common Methods:

| Action         | Method                                                    |
| -------------- | --------------------------------------------------------- |
| Select element | `document.getElementById()`<br>`document.querySelector()` |
| Change content | `element.innerHTML` or `element.textContent`              |
| Change style   | `element.style.color = 'red'`                             |
| Create element | `document.createElement()`                                |
| Add to page    | `parent.appendChild(child)`                               |
| Remove element | `element.remove()`                                        |
| Handle event   | `element.addEventListener('click', function)`             |

**Example**:

```js
document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("output").textContent = "Button Clicked!";
});
```


