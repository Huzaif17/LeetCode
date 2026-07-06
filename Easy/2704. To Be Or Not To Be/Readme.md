# 2704. To Be Or Not To Be

## 📌 Problem

Write a function `expect` that helps developers test their code.

The function takes any value `val` and returns an object containing two methods:

* **toBe(value)**

  * Returns `true` if `val === value`.
  * Throws `Error("Not Equal")` if the values are not strictly equal.

* **notToBe(value)**

  * Returns `true` if `val !== value`.
  * Throws `Error("Equal")` if the values are strictly equal.

---

## 💡 Approach

1. Create a function named `expect` that accepts a value.
2. Return an object containing two methods:

   * `toBe()`
   * `notToBe()`
3. Use JavaScript's strict comparison operators:

   * `===` for `toBe()`
   * `!==` for `notToBe()`
4. If the condition is satisfied, return `true`.
5. Otherwise, throw the required error message.

---

## ✅ Solution

```javascript
var expect = function(val) {
    return {
        toBe: function(other) {
            if (val === other) {
                return true;
            }
            throw new Error("Not Equal");
        },

        notToBe: function(other) {
            if (val !== other) {
                return true;
            }
            throw new Error("Equal");
        }
    };
};
```

---

## 🧪 Example

```javascript
expect(5).toBe(5);         // true
expect(5).notToBe(null);   // true
expect(5).toBe(null);      // Error: Not Equal
expect(5).notToBe(5);      // Error: Equal
```

---

## ⏱️ Complexity

* **Time Complexity:** `O(1)`
* **Space Complexity:** `O(1)`

---

## 🎯 Key Concepts Learned

* Functions returning objects
* Object methods
* Closures in JavaScript
* Strict equality (`===`)
* Strict inequality (`!==`)
* Throwing custom errors using `throw new Error()`

---

### 🚀 LeetCode

* **Problem Number:** 2704
* **Difficulty:** Easy
* **Language:** JavaScript
