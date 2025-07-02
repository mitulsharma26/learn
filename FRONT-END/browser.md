

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