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