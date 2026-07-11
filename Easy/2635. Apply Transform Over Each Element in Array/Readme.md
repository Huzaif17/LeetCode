# 2635. Apply Transform Over Each Element in Array

## 📌 Problem

Given an integer array `arr` and a mapping function `fn`, return a new array where each element is the result of applying the function `fn` to the corresponding element of `arr`.

The function `fn` takes two arguments:

- `arr[i]` → Current element
- `i` → Index of the current element

The original array should **not** be modified.

---

## 💡 Approach

1. Create an empty array called `result`.
2. Loop through every element in the input array.
3. Call the provided function `fn` with:
   - Current element (`arr[i]`)
   - Current index (`i`)
4. Store the returned value in the `result` array.
5. Return the `result` array.

---

## ✅ Solution

```javascript
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i);
    }

    return result;
};
```

---

## 🧠 Example

### Input

```javascript
arr = [1, 2, 3];
fn = function plusOne(n) {
    return n + 1;
}
```

### Output

```javascript
[2, 3, 4]
```

### Explanation

| Index | Value | Function Result |
|------:|------:|----------------:|
| 0 | 1 | 2 |
| 1 | 2 | 3 |
| 2 | 3 | 4 |

The transformed array becomes:

```javascript
[2, 3, 4]
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** `O(n)`
  - We iterate through the array once.

- **Space Complexity:** `O(n)`
  - A new array is created to store the transformed values.

---

## 📚 Concepts Used

- Arrays
- Functions
- Higher-Order Functions
- Iteration (`for` loop)
- Function Parameters

---

## 🚀 Key Learning

- A function can be passed as an argument to another function.
- The callback function can receive both the current value and its index.
- Instead of modifying the original array, create and return a new transformed array.
- This problem demonstrates how JavaScript's built-in `Array.prototype.map()` works internally.

---

### ⭐ LeetCode Problem

**2635. Apply Transform Over Each Element in Array**