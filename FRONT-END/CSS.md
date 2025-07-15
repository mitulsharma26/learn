# What is CSS ?
CSS stands for Cascading Style Sheets. It is used to style and layout HTML content. While HTML structures the content (like headings, paragraphs, links), CSS makes it look attractive (colors, spacing, fonts, etc.).


---

## Ways to Apply CSS 

| Method       | Syntax Example                             | Description                               |
| ------------ | ------------------------------------------ | ----------------------------------------- |
| Inline CSS   | `<h1 style="color:red;">Hello</h1>`        | Inside HTML tag using `style` attribute   |
| Internal CSS | `<style> h1 { color: red; } </style>`      | Inside `<style>` tag in the HTML `<head>` |
| External CSS | `<link rel="stylesheet" href="style.css">` | Links to an external `.css` file          |

---

## CSS Selectors

| Selector Type    | Syntax       | Description                               |
| ---------------- | ------------ | ----------------------------------------- |
| Element selector | `p`          | Selects all `<p>` elements                |
| ID selector      | `#myID`      | Selects element with ID `myID`            |
| Class selector   | `.myClass`   | Selects all elements with class `myClass` |
| Group selector   | `h1, p, div` | Selects all `h1`, `p`, and `div` elements |
| Universal        | `*`          | Selects all elements                      |

---

## Common CSS Properties

| Property           | Description               | Example Syntax                |
| ------------------ | ------------------------- | ----------------------------- |
| `color`            | Text color                | `color: red;`                 |
| `background`       | Background color or image | `background: yellow;`         |
| `font-size`        | Text size                 | `font-size: 18px;`            |
| `font-family`      | Font style                | `font-family: Arial;`         |
| `text-align`       | Aligns text               | `text-align: center;`         |
| `margin`           | Space outside the element | `margin: 10px;`               |
| `padding`          | Space inside the element  | `padding: 15px;`              |
| `border`           | Border around the element | `border: 1px solid black;`    |
| `width` / `height` | Size of the element       | `width: 100px; height: 50px;` |

---
Sure! Here's a concise answer:

---

# CSS Box Model
The **CSS Box Model** is a layout model that describes how the size of every HTML element is calculated and how elements are spaced on a web page. Each element is treated as a rectangular box made up of different layers.

### Components of the CSS Box Model: 

1. **Content** – The actual content of the box (text, image, etc.)
2. **Padding** – Space between the content and the border (inside the box)
3. **Border** – The edge or outline surrounding the padding and content
4. **Margin** – Space outside the border that separates the box from other elements

---

# CSS Units 

CSS units define the **size** of elements — like `width`, `padding`, `font-size`, etc.

There are **two main types**:

## 1. **Absolute Units** (Fixed size)

These units are **not affected by screen size** or parent element. They are best for printing or very specific use cases.

| Unit | Description                 | Example           |
| ---- | --------------------------- | ----------------- |
| `px` | Pixels (most commonly used) | `width: 100px`    |
| `pt` | Points (1 pt = 1/72 inch)   | `font-size: 12pt` |
| `cm` | Centimeters                 | `width: 5cm`      |
| `mm` | Millimeters                 | `width: 20mm`     |
| `in` | Inches (1in = 2.54cm)       | `width: 2in`      |
| `pc` | Picas (1pc = 12pt)          | `width: 3pc`      |


##  2. **Relative Units** (Depend on other values)

These units **scale** based on parent element, screen size, or font size.

###  Relative to Font Size:

| Unit  | Description                         | Example                           |
| ----- | ----------------------------------- | --------------------------------- |
| `em`  | Relative to parent font size        | `font-size: 2em` → 2× parent size |
| `rem` | Relative to root (`html`) font size | `font-size: 1.5rem`               |
| `ex`  | Height of lowercase letter "x"      | Rarely used                       |
| `ch`  | Width of the "0" character          | `width: 20ch`                     |


### Relative to Viewport Size:

| Unit   | Description                               | Example            |
| ------ | ----------------------------------------- | ------------------ |
| `vw`   | Viewport width (1vw = 1% of window width) | `width: 50vw`      |
| `vh`   | Viewport height                           | `height: 100vh`    |
| `vmin` | Smaller of `vw` or `vh`                   | `font-size: 5vmin` |
| `vmax` | Larger of `vw` or `vh`                    | `font-size: 5vmax` |


### % :

| Unit | Description                  | Example      |
| ---- | ---------------------------- | ------------ |
| `%`  | Percentage of parent element | `width: 80%` |











