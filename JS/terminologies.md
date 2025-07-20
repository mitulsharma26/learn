# Types of browser API's


## 1. DOM API (Document Object Model)

Enables you to manipulate the HTML structure and content dynamically.

| Method / Property                   | Description                           | Use Case                                |
| ----------------------------------- | ------------------------------------- | --------------------------------------- |
| `document.getElementById()`         | Selects an element by ID              | Change content of a specific section    |
| `document.querySelector()`          | Selects the first matching element    | Target a button or input for styling    |
| `document.querySelectorAll()`       | Selects all matching elements         | Apply style or events to multiple items |
| `element.innerHTML` / `innerText`   | Sets or gets HTML/text inside element | Update content dynamically              |
| `element.style`                     | Sets inline styles                    | Change CSS with JavaScript              |
| `createElement()` / `appendChild()` | Creates and adds new DOM elements     | Dynamically add cards, images, etc.     |
| `removeChild()` / `remove()`        | Removes DOM elements                  | Delete items from UI                    |
| `classList.add/remove/toggle()`     | Manage element classes                | Show/hide menu or apply animations      |


##  2. Event API

Handles user interactions (like clicks, inputs, scrolling).

| Method / Property       | Description                                | Use Case                           |
| ----------------------- | ------------------------------------------ | ---------------------------------- |
| `addEventListener()`    | Listens for an event                       | Run a function on button click     |
| `removeEventListener()` | Stops listening for an event               | Stop tracking scroll after a point |
| `event.target`          | Refers to element that triggered event     | Get input field or clicked element |
| `preventDefault()`      | Prevents default action (e.g. form submit) | Custom form submission logic       |
| `stopPropagation()`     | Stops event from bubbling                  | Prevent nested click effects       |



## 3. Window & Navigation API

Provides control over the browser tab/window and location.

| Method / Property      | Description                        | Use Case                                   |
| ---------------------- | ---------------------------------- | ------------------------------------------ |
| `window.alert()`       | Shows an alert box                 | Display messages to the user               |
| `window.confirm()`     | Shows confirmation popup           | Ask before deleting something              |
| `window.prompt()`      | Ask user for input                 | Simple input collection                    |
| `window.open()`        | Opens a new tab/window             | Open external links                        |
| `window.location.href` | Gets/sets current URL              | Redirect user to another page              |
| `window.scrollTo()`    | Scrolls the page to specific point | Scroll to a section when button is clicked |
| `window.innerWidth`    | Gets viewport width                | Responsive UI logic                        |



## 4. Timing API

Run code after delays or at intervals.

| Method                | Description                     | Use Case                     |
| --------------------- | ------------------------------- | ---------------------------- |
| `setTimeout(fn, ms)`  | Run code after delay            | Show message after 2 seconds |
| `setInterval(fn, ms)` | Run code repeatedly at interval | Create stopwatch, carousel   |
| `clearTimeout()`      | Cancel a timeout                | Stop an animation            |
| `clearInterval()`     | Cancel an interval              | Stop a timer or loop         |



## 5. Fetch & Network API

Handle network requests.

| Method / Property    | Description                       | Use Case                              |
| -------------------- | --------------------------------- | ------------------------------------- |
| `fetch()`            | Send HTTP request (GET/POST etc.) | Load data from API                    |
| `Response.json()`    | Parse JSON from response          | Convert API result to usable data     |
| `Response.text()`    | Parse plain text                  | Read simple content or error messages |
| `then()` / `catch()` | Handle async result               | Process response or catch errors      |
| `async/await` (JS)   | Cleaner way to handle promises    | Modern and readable API logic         |


## 6. Web Storage API

Store small key-value data in the browser.

| API                         | Function                             | Use Case                 |
| --------------------------- | ------------------------------------ | ------------------------ |
| `localStorage.setItem()`    | Save data (persists)                 | Store theme, login, cart |
| `localStorage.getItem()`    | Read stored data                     | Load saved preferences   |
| `localStorage.removeItem()` | Delete stored data                   | Log out user             |
| `sessionStorage.*`          | Same as above (expires on tab close) | Temp form data           |



##  7. Geolocation API

Gets the user’s physical location.

| Function                                     | Description               | Use Case                          |
| -------------------------------------------- | ------------------------- | --------------------------------- |
| `navigator.geolocation.getCurrentPosition()` | Gets latitude & longitude | Show weather, nearby places, etc. |

> ⚠ Requires user permission.



## 8. Media & Device APIs

Used for multimedia input/output.

| API Function                            | Description                   | Use Case                          |
| --------------------------------------- | ----------------------------- | --------------------------------- |
| `navigator.mediaDevices.getUserMedia()` | Access camera/mic             | Video call, selfie capture, audio |
| `AudioContext`, `MediaRecorder`         | Record audio or process sound | Podcast recorder, music apps      |


##  9. Clipboard API

Access system clipboard.

| Function                          | Description         | Use Case           |
| --------------------------------- | ------------------- | ------------------ |
| `navigator.clipboard.writeText()` | Copy to clipboard   | “Copy Code” button |
| `navigator.clipboard.readText()`  | Read from clipboard | Paste detection    |

> ⚠ Works over HTTPS only.


##  10. History & Navigation API

Modify browser history.

| Function              | Description          | Use Case                       |
| --------------------- | -------------------- | ------------------------------ |
| `history.back()`      | Go back              | Custom back button             |
| `history.forward()`   | Go forward           | Move to next page in history   |
| `history.pushState()` | Modify browser state | Single Page Apps (SPA) routing |



##  11. Drag & Drop API

Native drag and drop interactions.

| Event / Property                | Description               | Use Case                      |
| ------------------------------- | ------------------------- | ----------------------------- |
| `dragstart`, `dragover`, `drop` | Events for dragging       | Rearranging list items        |
| `dataTransfer.setData()`        | Attach data to drag event | Pass content between elements |



## 12. Canvas API

2D graphics drawing surface.

| Method / Property           | Description         | Use Case                       |
| --------------------------- | ------------------- | ------------------------------ |
| `canvas.getContext('2d')`   | Get drawing context | Games, chart drawing, sketches |
| `fillRect()`, `drawImage()` | Drawing commands    | Create shapes, visuals         |



## 13. Notifications API

Browser push notifications.

| Method                             | Description                     | Use Case                                |
| ---------------------------------- | ------------------------------- | --------------------------------------- |
| `Notification.requestPermission()` | Ask for notification permission | Show alerts even when user switches tab |
| `new Notification()`               | Show a notification             | Reminders, chat alerts                  |



## 14. Speech API

Convert speech to text or vice versa.

| API                 | Description    | Use Case               |
| ------------------- | -------------- | ---------------------- |
| `SpeechRecognition` | Voice input    | Voice search, commands |
| `speechSynthesis`   | Text-to-speech | Read content aloud     |

# JSON

**JSON (JavaScript Object Notation)** is a lightweight, text-based format for **storing and exchanging data**. It is **easy for humans to read and write**, and **easy for machines to parse and generate**.

JSON is often used to transmit data between a **server and a web application** (like when fetching user data or sending form info).


##  Structure of JSON

JSON is built using:

* **Objects**: `{ "key": "value" }` (like dictionaries in Python)
* **Arrays**: `[1, 2, 3]` (like lists)
* **Data types**: string, number, boolean, null, array, object

Example:

```json
{
  "name": "Mitul",
  "age": 19,
  "isStudent": true,
  "skills": ["Python", "HTML", "CSS"],
  "address": {
    "city": "Ambala",
    "state": "Haryana"
  }
}
```


## Common Uses of JSON

1. **Web APIs (RESTful APIs)**

   * Server sends data in JSON format (e.g., user info, product data).
   * Client parses it using JavaScript or other languages.

2. **Configuration Files**

   * Tools like ESLint, Babel, Prettier use `.json` config files.
   * Example: `package.json` in Node.js manages project settings.

3. **Data Storage**

   * Lightweight databases or local files (e.g., storing settings).
   * `localStorage` or `IndexedDB` in the browser often uses JSON.

4. **Communication Between Languages**

   * Languages like Python, Java, PHP, and Ruby all support JSON.
   * Ideal format for cross-language data exchange.

5. **Serialization/Deserialization**

   * Convert complex data structures to JSON string (serialization) to store or send.
   * Parse back into native objects (deserialization) when needed.

