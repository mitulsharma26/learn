# Call-back Hell 
When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 

# Inversion of control 
The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
That process is called inversion of control. 

# Promises
- is an objext representing the eventual completion or failure of an asynchronus operation 
- states of a promise :
     - pending - initail state , neither fullfilled or rejected
     - fulfuilled - operation was completed successfully
     - rejected - means the operation is failed
- if a promise is resolved ( i.e asnynchronus operation is completed successfully and the state changed from pending to fulfilled ) , then it is immutable
- Promise object has 2 major properties :
    - promise-state - current state of the promise
    - promise-result - holds data from the response

- Importance of promises :
  - inversion of control - by attaching the callback function to the promise object rather than passing it as an argument. 
  - call-back hell - can be tackled by using promise chaining ( using then-chains ) , always precede the chained call-back function wwith a return-statement OR an arrow-function can also be used     

--- 

# Promise Creation

###  Syntax:

```javascript
let promise = new Promise(function(resolve, reject) {
  // async task
});
```

###  Example:

```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task done!");
  } else {
    reject("Task failed!");
  }
});
```


* `resolve(value)` → marks promise as **fulfilled**
* `reject(error)` → marks it as **rejected**

---

##   Using `.then()` and `.catch()`

###  `.then()` — Handles success

```javascript
promise.then((result) => {
  console.log("Success:", result);
});
```

* It runs when `resolve()` is called.
* The value passed to `resolve()` becomes `result`.



### `.catch()` — Handles errors

```javascript
promise.catch((error) => {
  console.log("Error:", error);
});
```

* It runs when `reject()` is called.
* The value passed to `reject()` becomes `error`.



---

##  Promise Chaining
Chaining allows you to perform multiple tasks **in order**, each using the result of the previous one.

```javascript
new Promise((resolve) => {
  resolve(2);
})
  .then((value) => {
    console.log(value); // 2
    return value * 2;
  })
  .then((value) => {
    console.log(value); // 4
    return value * 2;
  })
  .then((value) => {
    console.log(value); // 8
  });
```

### 🔍 How it works:

* Each `.then()` returns a **new Promise**.
* The **returned value** is passed to the **next** `.then()`.

---

