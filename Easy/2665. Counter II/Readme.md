# 2665. Counter II

## 📌 Problem

Write a function `createCounter` that accepts an initial integer `init` and returns an object with three methods:

* **increment()**

  * Increases the current value by `1`.
  * Returns the updated value.

* **decrement()**

  * Decreases the current value by `1`.
  * Returns the updated value.

* **reset()**

  * Resets the current value back to the initial value (`init`).
  * Returns the reset value.

---

## 💡 Approach

1. Create a variable `current` and initialize it with `init`.
2. Return an object containing three methods:

   * `increment()`
   * `decrement()`
   * `reset()`
3. Each method updates or resets `current`.
4. Since the methods are inside `createCounter()`, they form a **closure**, allowing them to remember the values of `current` and `init` between function calls.

  

## 🧪 Example

```javascript
const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.reset());     // 5
```

---

## ⏱️ Complexity

* **Time Complexity:** `O(1)`
* **Space Complexity:** `O(1)`

---

## 🧠 Key Concepts Learned

* Closures in JavaScript
* Returning objects from functions
* Maintaining state between function calls
* Object methods
* Increment (`++`) and decrement (`--`) operators
* Resetting state using the original value

---

## 🚀 LeetCode

* **Problem Number:** 2665
* **Difficulty:** Easy
* **Language:** JavaScript
