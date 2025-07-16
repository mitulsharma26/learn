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


---

# Positions in CSS

The `position` property in CSS determines how an element is **placed in the document flow** and how it behaves with `top`, `right`, `bottom`, and `left` values.



## Types of CSS Position Values:

| Position Value | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| `static`       | Default position (normal flow of the page)                          |
| `relative`     | Moves **relative to its normal position**                           |
| `absolute`     | Moves **relative to nearest positioned ancestor** (or page if none) |
| `fixed`        | Stays **fixed to the screen** (viewport), not affected by scrolling |
| `sticky`       | Behaves like `relative` until a scroll threshold, then `fixed`      |

---

## Detailed Explanations:

### 1. static (default)

* The element stays in normal document flow.
* Can't be moved using `top`, `left`, etc.


### 2. relative

* Element stays in flow **but can be moved** using `top`, `left`, `right`, `bottom`.
* Other elements are **not affected** by this movement.


### 3. absolute

* Removed from normal flow.
* Positioned **relative to the nearest ancestor** with `position: relative` (or similar).
* If none, it positions relative to the **viewport (entire page)**.


### 4. fixed

* Removed from flow.
* Positioned relative to the **viewport**.
* Stays in place even when you scroll the page.

Used for:

* Floating buttons
* Sticky headers/footers
* Pop-ups


### 5. sticky

* A mix of `relative` and `fixed`.
* Starts as `relative`, but **"sticks" to a position** when scrolling past a threshold.

Used for:

* Sticky headers
* Scroll-based UI elements

---

#  z-index

The `z-index` property in CSS controls the **stacking order** of overlapping elements. An element with a higher `z-index` will appear **on top** of one with a lower value.


## Rules of `z-index`:

1. `z-index` **only works on positioned elements** (`relative`, `absolute`, `fixed`, or `sticky`)
2. Higher `z-index` means **on top**
3. If two elements have the same `z-index`, the one **declared later in HTML** will appear on top
4. `z-index` comparisons **only work within the same stacking context**


---

# CSS Variables

 **CSS Variables**, also known as **custom properties**, are user-defined values in CSS that begin with `--` and can be reused throughout a stylesheet using the `var()` function.
They allow for **dynamic, maintainable, and scalable** styling by enabling the central definition of values like colors, sizes, fonts, and more.



## Syntax of CSS Variables

###  1. Global Declaration (using `:root`)

* `:root` is the highest-level selector, representing the `<html>` element.
* Variables declared here are available **anywhere in the CSS**.

```css
:root {
  --primary-color: #4f46e5;
  --font-size: 16px;
}
```

#### Use it like:

```css
body {
  color: var(--primary-color);
  font-size: var(--font-size);
}
```



### 2.Local Declaration (Scoped to a Selector)

* Variables can also be defined **inside a specific element or class**.
* These override global ones **within their scope**.

```css
.card {
  --primary-color: #f97316;
  background-color: var(--primary-color);
}
```

#### In this case:

* `--primary-color` is **only available inside `.card`**
* If the same variable exists globally, this one will **override** it inside `.card`


---

# `@property` in CSS 

`@property` is a CSS at-rule that allows you to define **custom CSS properties (variables)** with **types**, **initial values**, and **inherited behavior**.
It brings structure and control to custom properties, especially useful for **animations and transitions** on CSS variables.


### Why use `@property`?

Normally, CSS variables (like `--x`) are treated as **strings**, so they can't be transitioned or interpolated.

But with `@property`, you can define a variable as a **number**, **color**, or **length**, making it animatable and more powerful.


### Syntax of `@property`:

```css
@property --my-color {
  syntax: '<color>';
  inherits: false;
  initial-value: #000;
}
```


### Explanation of Components:

| Part            | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| `--my-color`    | The name of the custom property                               |
| `syntax`        | Type of the value (`<length>`, `<color>`, `<number>`, etc.)   |
| `inherits`      | `true` or `false` — whether it should inherit from its parent |
| `initial-value` | Default value if the variable isn't set anywhere              |

---


# CSS Media Query 

A **media query** is a CSS technique used to apply different styles to different devices or screen sizes.
It allows your website to be **responsive** — meaning it looks good on phones, tablets, and desktops.

Media queries check the **characteristics of the device** (like width, height, orientation, resolution) and apply styles only when the conditions match.


### Basic Syntax:

```css
@media media-type and (media-feature) {
  /* CSS rules here */
}
```


### Components of a Media Query:

| Component           | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| `@media`            | The at-rule that starts a media query                         |
| `media-type`        | The type of device (e.g., `screen`, `print`, `all`)           |
| `media-feature`     | The condition being tested (e.g., `max-width`, `orientation`) |
| `logical operators` | Combine or modify conditions (`and`, `not`, `only`, `,`)      |
| CSS Block           | The styles applied when the condition is true                 |


### Common Media Features:

| Feature       | Description                       | Example                    |
| ------------- | --------------------------------- | -------------------------- |
| `max-width`   | Max width of the screen           | `(max-width: 768px)`       |
| `min-width`   | Min width of the screen           | `(min-width: 1024px)`      |
| `orientation` | `portrait` or `landscape`         | `(orientation: landscape)` |
| `max-height`  | Max height of the screen          | `(max-height: 600px)`      |
| `resolution`  | Screen resolution in dpi/dppx     | `(min-resolution: 2dppx)`  |
| `hover`       | Whether the device supports hover | `(hover: hover)`           |



### Logical Operators:

| Operator | Use                                                     |
| -------- | ------------------------------------------------------- |
| `and`    | Combine multiple conditions                             |
| `,`      | "OR" — applies if **either condition** is true          |
| `not`    | Negates the condition                                   |
| `only`   | Prevents old browsers from applying unsupported queries |

