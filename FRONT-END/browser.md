

# Step-by-Step Working of a Web Browser

1. User Enters URL / Clicks Link

The browser receives a URL (e.g., https://example.com).

It breaks it into protocol (https), domain (example.com), and path (/).



---

2. DNS Lookup

Browser queries the DNS server to convert the domain into an IP address.



---

3. Establishing Connection

Using the IP, the browser initiates a TCP connection.

If https, it performs an SSL/TLS handshake for a secure connection.



---

4. Sending HTTP Request

The browser sends an HTTP GET request to the server asking for the web page (e.g., GET /index.html).



---

5. Server Sends Back Response

The server responds with an HTML document (and other resources like CSS, JS, images, etc.).



---

6. HTML Parsing Begins

The browser starts parsing the HTML from top to bottom, converting it into a tree structure called the:


> DOM (Document Object Model)



Represents the structure and content of the webpage.

Every tag becomes a node in this tree (e.g., <div>, <p>, etc.)



---

7. CSS Parsing Begins (in parallel)

When a <link> or <style> is encountered, the browser fetches the CSS and parses it into:


>  CSSOM (CSS Object Model)



A tree-like structure that represents CSS styles for each element.



---

8. JavaScript Parsing & Execution

When a <script> is encountered:

Blocking Scripts: Pause HTML parsing until the script runs (unless async or defer is used).

JS can manipulate the DOM and CSSOM using the browser’s API.



DOM & CSSOM are accessible via JS, and changes in JS (like adding elements, changing styles) dynamically update the visual content.


---

9. Render Tree Construction

The browser combines the DOM and CSSOM into a:


> Render Tree



This tree only contains visible elements and their computed styles.

Example: If an element is display: none, it won't appear in the render tree.



---

10. Layout (Reflow)

The browser calculates the exact position and size of each element in the render tree.



---

11. Painting

The browser paints each pixel on the screen based on computed styles: colors, fonts, images, etc.



---

12. Compositing

If layers (like animations, transforms) are present, they are composited and displayed on the screen.


---

Here’s a simple explanation of each:


---

## 1. DNS Server (Domain Name System)

### What is it?

A DNS server is like the phonebook of the internet — it translates domain names (like google.com) into IP addresses (like 142.250.183.14), which computers use to find each other.

### Why is it needed?

Humans remember names, not IPs.

Computers need IP addresses to locate servers.


### How it works:

When you type a website URL:

1. Your browser asks the DNS server: “What’s the IP of example.com?”


2. The DNS replies with the IP address.


3. Now the browser can connect to that server.




---

## 2. TCP (Transmission Control Protocol)

### What is it?

TCP is a communication protocol that ensures reliable and ordered delivery of data between two systems (your browser and a web server).

### Key Features:

Reliable: Resends lost packets.

Ordered: Delivers packets in the correct order.

Connection-based: Uses a 3-way handshake to establish a connection before data transfer.

### 3-Way Handshake:

1. SYN (start connection)


2. SYN-ACK (acknowledge and respond)


3. ACK (confirm)



Once complete, data flows securely and reliably.


---

## 3. SSL/TLS (Secure Sockets Layer / Transport Layer Security)

### What is it?

SSL/TLS encrypts data between your browser and the server, so no one (like hackers or ISPs) can read or tamper with it.

TLS is the modern and secure version (SSL is outdated).


### Why is it important?

It protects:

Passwords

Credit card details

Personal data


### How it works:

1. Browser and server agree on encryption methods.


2. They exchange certificates to prove identity.


3. They create a session key for encrypted communication.



> Websites using SSL/TLS show https:// and a lock icon in the browser.




---



## DOM vs CSSOM Parsing 

| **Step** | **DOM Parsing (HTML)** | **CSSOM Parsing (CSS)** |
|----------|-------------------------|--------------------------|
| **1. Raw Bytes** | HTML file is downloaded as raw byte stream | CSS file or `<style>` block is downloaded as raw byte stream |
| **2. Character Conversion** | Bytes decoded (usually UTF-8) to characters like `<`, `p`, `div` | Bytes decoded to characters like `h1`, `{`, `color` |
| **3. Tokenization** | Characters grouped into **HTML tokens**: start tag, end tag, text, comment | Characters grouped into **CSS tokens**: selectors, properties, values, braces |
| **4. Object Creation** | Tokens converted into **DOM nodes** (element nodes, text nodes) | Tokens converted into **CSSRule objects** (`StyleRule`, `MediaRule`, etc.) |
| **5. Tree / Relationship Building** | DOM nodes linked in a **parent-child tree structure** representing document content | CSS rules organized into **CSSOM tree**, showing selector-rule relationships and nesting |
| **6. Output** | **DOM Tree** → represents HTML structure and content | **CSSOM Tree** → represents stylesheet structure and applied styles |
| **7. Interaction with JS** | DOM can be queried or modified via JS (`document.createElement`, etc.) | CSSOM can be queried/modified via JS (`document.styleSheets`, `insertRule`, etc.) |
| **8. Purpose** | Describes **content and structure** of the page | Describes **visual presentation** (styles) of the page |


---

#  Local Storage

**Local Storage** is a feature of the **Web Storage API** provided by modern web browsers that allows developers to **store key-value pairs of data in the browser**, persistently and **without expiration**.

Unlike cookies (which are sent to the server with every request), local storage data is stored **entirely on the client side**, and is **not automatically transmitted** to the server. It provides a way to **store data across browser sessions**, which means the data remains available even after the browser or tab is closed and reopened.

Local Storage is accessible via JavaScript through the global `localStorage` object.

### How It Works

When you store data using `localStorage`, it is saved in your browser's internal memory system — under that website's domain — and can be retrieved or modified anytime that site is revisited.

```javascript
// Store data
localStorage.setItem('theme', 'dark');

// Retrieve data
const theme = localStorage.getItem('theme');

// Remove data
localStorage.removeItem('theme');

// Clear all local storage for the domain
localStorage.clear();
```

### Real-World Use Cases of Local Storage

| Use Case                      | Description                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------- |
|  **Theme Persistence**      | Remember dark/light mode preference between visits                           |
|  **Shopping Cart**          | Temporarily store cart items in e-commerce websites without login            |
|  **Form Autosave**          | Store partially filled form data (e.g., blog drafts or feedback forms)       |
|  **Client-Side Tokens**     | Store JWT tokens for authentication (not recommended for high-security apps) |
|  **User Preferences**       | Store language settings, font size, layout options                           |
|  **Game Progress**          | Save score, level, or configuration of web games                             |
|  **Notes or To-do Lists**   | Allow users to save quick notes/tasks even if the tab is closed              |
|  **Dashboard State**        | Store filter or sort preferences for analytics dashboards                    |
|  **First-Time Visit Flags** | Detect if the user has visited before and show/hide onboarding popups        |


---

# Headers in a Browser

**Headers** are pieces of metadata (key-value pairs) sent **before** the actual content in an **HTTP request or response**. They are part of the **HTTP protocol** and used to describe:

* the **request or response**
* the **content being sent**
* **how to handle** that content

Headers are not visible on a webpage but are **used behind the scenes** when the browser communicates with a server.


## Types of Headers

There are two main categories:

### 1. Request Headers (Browser ➡ Server)

These are sent **by the browser** to the server when you make a request.

Examples:

| Header          | Meaning                                                                  |
| --------------- | ------------------------------------------------------------------------ |
| `Host`          | Domain being requested (e.g., [www.example.com](http://www.example.com)) |
| `User-Agent`    | Browser and OS info (e.g., Chrome, Windows)                              |
| `Accept`        | What type of response formats are accepted (e.g., JSON)                  |
| `Authorization` | Credentials (like tokens) for secure resources                           |
| `Referer`       | URL of the previous page that made the request                           |
| `Cookie`        | Sends cookies stored in the browser                                      |
| `Content-Type`  | Format of the body being sent (e.g., `application/json`)                 |

---

### 2. Response Headers (Server ➡ Browser)

These are sent **by the server** in response to the browser's request.

Examples:

| Header                        | Meaning                                                       |
| ----------------------------- | ------------------------------------------------------------- |
| `Content-Type`                | Type of data returned (e.g., `text/html`, `application/json`) |
| `Content-Length`              | Size of the response body in bytes                            |
| `Set-Cookie`                  | Instructs browser to store cookies                            |
| `Cache-Control`               | Controls caching behavior                                     |
| `Access-Control-Allow-Origin` | Controls which domains can access this server (CORS)          |
| `Strict-Transport-Security`   | Forces HTTPS connection                                       |

---

### Use Cases of Headers

| Use Case                          | Headers Involved                                                          |
| --------------------------------- | ------------------------------------------------------------------------- |
|  Authentication                 | `Authorization`, `Set-Cookie`, `WWW-Authenticate`                         |
|  File downloads                 | `Content-Disposition: attachment; filename=...`                           |
|  CORS (Cross-Origin)            | `Access-Control-Allow-Origin`, `Origin`                                   |
| Caching and speed optimization | `Cache-Control`, `ETag`, `Last-Modified`                                  |
|  Security                       | `Strict-Transport-Security`, `X-Frame-Options`, `Content-Security-Policy` |
|  Language preference            | `Accept-Language`                                                         |
| Device or browser info         | `User-Agent`                                                              |

---

# Cookie 

A **cookie** is a small piece of **text-based data** that a website stores in the **user's web browser**. It allows the website to **remember information about the user** across different pages or sessions (visits), such as login status, preferences, and tracking data.

Cookies are stored as **key-value pairs** and are automatically **sent with every HTTP request** to the same domain.


##  How Cookies Work (Behind the Scenes)

1. **Server Sets the Cookie:**
   When a user visits a website, the server can send a cookie using the `Set-Cookie` header in the HTTP response.

   ```
   Set-Cookie: sessionId=abc123; Expires=Wed, 21 Aug 2025 07:28:00 GMT; Path=/; HttpOnly
   ```

2. **Browser Stores the Cookie:**
   The browser stores it under the domain.

3. **Browser Sends Cookie Back:**
   On future requests to the same domain, the browser automatically adds the cookie to the HTTP request:

   ```
   Cookie: sessionId=abc123
   ```

4. **Server Uses the Cookie:**
   The server reads the cookie to identify or remember the user.


## Use Cases of Cookies

| Use Case                  | Example                                                                   |
| ------------------------- | ------------------------------------------------------------------------- |
|  **Authentication**     | Storing session IDs or tokens after login                                 |
|  **E-Commerce**         | Remembering shopping cart contents                                        |
|  **Preferences**        | Saving language, theme (dark/light), font size                            |
|  **Analytics/Tracking** | Identifying returning visitors (used by Google Analytics, Facebook, etc.) |
|  **Form Auto-Fill**     | Remembering user input or pre-filling form fields                         |
|  **A/B Testing**        | Assigning users to specific design variants                               |


## Types of Cookies

| Type                       | Description                                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ |
|  **Session Cookies**      | Temporary cookies that are deleted when the browser is closed.                                                     |
|  **Persistent Cookies**  | Remain in the browser until a specified `expires` date.                                                            |
|  **Secure Cookies**      | Only sent over HTTPS connections for security.                                                                     |
|  **HttpOnly Cookies**     | Inaccessible via JavaScript, used to prevent XSS attacks.                                                          |
|  **Third-Party Cookies** | Set by domains **other than the site being visited**. Often used for advertising and tracking.                     |
| **SameSite Cookies**    | Controls whether cookies are sent with cross-site requests (`Strict`, `Lax`, `None`) to help prevent CSRF attacks. |



---

## Caching in browser

**Caching** is the process of storing a **copy of web resources (HTML, CSS, JS, images, etc.)** on the user's device (usually in memory or disk) so that future requests for those resources can be **served faster** — without contacting the server again.

> In simple terms: **the browser saves stuff locally so your website loads faster next time.**

---

##  Why Is Caching Important?

| Benefit                      | Description                                                     |
| ---------------------------- | --------------------------------------------------------------- |
|  Faster load times          | No need to download the same resources again                    |
|  Reduced bandwidth         | Fewer requests to the server                                    |
|  Better offline experience | Some apps can work even without internet (PWA, service workers) |
|  Less server load         | Server gets fewer requests for static files                     |

---

## How Browser Caching Works

1. User visits a website.
2. The browser downloads resources (HTML, CSS, JS, images, fonts, etc.).
3. Along with these, the server sends **HTTP caching headers** like `Cache-Control`, `Expires`, `ETag`, etc.
4. The browser stores these resources in its **cache memory**.
5. On subsequent visits:

   * The browser uses **cached versions** instead of re-downloading.
   * Or it checks if the file changed using headers (conditional caching).

## Types of Caching in Browsers

| Type                     | Description                                                             |
| ------------------------ | ----------------------------------------------------------------------- |
| **Memory Cache**         | Fastest. Stores items in RAM. Temporary and lost on reload.             |
| **Disk Cache**           | Persists between sessions. Stores static resources (images, JS, CSS).   |
| **Service Worker Cache** | Controlled by code (custom logic). Used in Progressive Web Apps (PWAs). |
| **Prefetch/Preload**     | Browser downloads resources it thinks will be used next.                |
| **HTTP Cache**           | Controlled by HTTP headers (e.g., `Cache-Control`, `ETag`, etc.)        |


##  HTTP Headers Used in Caching

| Header          | Purpose                                                                    |
| --------------- | -------------------------------------------------------------------------- |
| `Cache-Control` | Primary header to define caching rules (public/private, max-age, no-store) |
| `Expires`       | Sets a date after which the resource is considered stale                   |
| `ETag`          | A unique identifier for a version of a resource                            |
| `Last-Modified` | Timestamp of the last change to a file                                     |
| `Pragma`        | Legacy header (usually `no-cache`)                                         |
| `Vary`          | Controls how caching varies based on request headers (like user-agent)     |

---
Certainly! Here's a complete and in-depth explanation of **HTTP verbs (also called HTTP methods)** — what they are, their types, and use cases.

---

# What Are HTTP Verbs ?

**HTTP verbs** (or methods) are commands used in the **HTTP protocol** to tell a web server **what action to perform** on a specific resource (like a file, data, or endpoint).

They are used in **HTTP requests** and define the **intent** of the request.


## Types of verbs 

### 1. **GET**

* Used to **retrieve** data from a server.
* Should **not change any server data**.

```http
GET /products
```

### 2. **POST**

* Used to **send data** to the server (e.g., from a form).
* Often results in a **new resource being created**.

```http
POST /register
Body: { "username": "mitul", "password": "1234" }
```

### 3. **PUT**

* Used to **replace** an existing resource with new data.
* If the resource doesn’t exist, it might create it.

```http
PUT /user/1
Body: { "name": "Mitul", "age": 19 }
```

### 4. **PATCH**

* Used to **partially update** a resource.
* More efficient than PUT for small changes.

```http
PATCH /user/1
Body: { "name": "Mitul Sharma" }
```

### 5. **DELETE**

* Used to **remove a resource**.

```http
DELETE /post/55
```

### 6. **HEAD**

* Same as GET, but **returns only headers** (no body).
* Used to **check if a file exists**, or its size/type.

```http
HEAD /image.jpg
```

### 7. **OPTIONS**

* Tells what HTTP methods are allowed on a resource.
* Common in **CORS preflight** checks.

```http
OPTIONS /api/user
```

---
