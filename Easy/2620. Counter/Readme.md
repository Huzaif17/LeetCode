

# 2620. Counter

## Difficulty

Easy

## Language

JavaScript

## Problem

Given an integer `n`, return a counter function.

The counter function should:

- Return `n` on the first call.
- Return `n + 1` on the second call.
- Return `n + 2` on the third call.
- Continue increasing by `1` on every subsequent call.

---

## Approach

The solution uses a **closure**.

- The outer function `createCounter` receives the initial value `n`.
- It returns an inner function.
- The inner function remembers the value of `n` even after the outer function has finished executing.
- Each time the inner function is called, it returns the current value of `n` and then increments it using the post-increment operator (`n++`).

---

## Solution

```javascript
/**
 * @param {number} n
 * @return {Function}
 */
var createCounter = function (n) {
    return function () {
        return n++;
    };
};
```

---

## Example

```javascript
const counter = createCounter(10);

counter(); // 10
counter(); // 11
counter(); // 12
counter(); // 13
```

---

## Key Concepts

- Closures
- Higher-Order Functions
- Function Scope
- Post Increment (`n++`)

---

## Time Complexity

```
O(1)
```

Each function call performs a constant amount of work.

---

## Space Complexity

```
O(1)
```

No additional data structures are used.

---

## What I Learned

- How closures allow a function to remember variables from its outer scope.
- The difference between `n++` (post-increment) and `++n` (pre-increment).
- How JavaScript functions can maintain state without using global variables.