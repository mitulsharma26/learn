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

###  How it works:

* Each `.then()` returns a **new Promise**.
* The **returned value** is passed to the **next** `.then()`.



# `async` and `await`

* `async` and `await` are **modern keywords** used to **write asynchronous code** in a more **readable, synchronous-looking** way.
* They work with **Promises** behind the scenes.


##  **Syntax & Explanation**

### `async` keyword:

Used **before a function** to declare that it returns a **Promise**.

```javascript
async function myFunction() {
  return "Hello!";
}
```

➡ This is the same as:

```javascript
function myFunction() {
  return Promise.resolve("Hello!");
}
```



### `await` keyword:

Used **inside async functions** to **pause** the execution **until the Promise resolves**.

```javascript
let result = await somePromise;
```

* `await` can only be used **inside an `async` function**
* It **waits** for the Promise to finish and gives you the **resolved value**


Sure, here is just the example code without emojis:

### Example 
```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

async function showData() {
  console.log("Fetching data...");

  let result = await fetchData();

  console.log(result);
}

showData();
```
## Important points to remember : 
- usually promises are returned as values from the async function , but if the returning value is not a promise then the async function wrap the value inside a promise , then return it ;
- usually , JS dont wait for promises to get resolved , it will continue executing next lines , but in async-await , program waits for the promise to get resolved at the await-line
- if multiple promises are resolved one after other , then the one with the preceeding await-line will get executed first even if it is resolved later
- In call stack , when JS encouunters a async function it get pushed , but if during its execution a await-line is encountered whose promise is not resolved , then the async function get suspended After the promise is resolved , the execution will continue 
---
# Promise API's 
1. Promise.all([p1,p2,...])
   - it makes call for all promises prallely , but waits for all pf them to get resolved
   - if any of the promise is rejected , it shows error without waiting for any other promise
2. Promise.allsettled([p1,p2,...])
   - it also calls for promises parallely and waits for all of them to get resolved
   - if any of the promise get rejected , it still waits for other promises to get settled and returns values or according to the state of promises
3. Promise.race([p1,p2,...])
   - the 1st promise which get settled from the array , only its value will be returned
   - even if the 1st promise get rejected , it returns the error
4. Promise.any([p1,p2...p3])
   - it wait for the 1st promise to get resolved only
   - if a promise is get rejected before it , then it will be ignored
   - but if all the promises in the array get rejected then it will return an aggregated error .

## this keyword 
- in global space , has the value of the global object ( window in browsers )
- inside a function , it also have the value of the global object in non-strict mode(default)
    - but it in strict-mode , this-substitition happens under which this has undefined value ( but it returns global object , when we call like this : window.fn();)
- inside an object's method , when we call obj.fun(); , then this returns the whole object as its value
- inside an arrow function , it does not have its own this value , it takes it from its enclosing lexical context
- inside DOM , it is the refernce to the HTML element 

