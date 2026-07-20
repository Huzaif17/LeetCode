# LeetCode 2634 - Filter Elements from Array

## 📌 Problem Statement

Given an integer array `arr` and a filtering function `fn`, return a new array `filteredArr`.

The filtering function `fn` takes two arguments:

* `arr[i]` → Current element
* `i` → Current index

Keep only those elements for which:

```javascript
fn(arr[i], i)
```

returns a **truthy** value.

**Note:** Do not use the built-in `Array.filter()` method.

---

## 💡 Approach

1. Create an empty array called `result`.
2. Traverse the input array using a `for` loop.
3. For each element, call the filtering function:

   ```javascript
   fn(arr[i], i)
   ```
4. If the function returns `true`, add the original element to `result`.
5. Return the filtered array after the loop ends.

---

## ✅ Solution

```javascript
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }

    return result;
};
```

---

## 🧪 Example

### Input

```javascript
arr = [1, 2, 3, 4];

fn = function(n) {
    return n % 2 === 0;
}
```

### Output

```javascript
[2, 4]
```

### Explanation

* `1` → `false` ❌
* `2` → `true` ✅
* `3` → `false` ❌
* `4` → `true` ✅

Filtered array:

```javascript
[2, 4]
```

---

## 🔍 Dry Run

| Index | Element | `fn(arr[i], i)` | Action |  Result  |
| ----: | ------: | :-------------: | :----: | :------: |
|     0 |       1 |     `false`     |  Skip  |   `[]`   |
|     1 |       2 |      `true`     |  Keep  |   `[2]`  |
|     2 |       3 |     `false`     |  Skip  |   `[2]`  |
|     3 |       4 |      `true`     |  Keep  | `[2, 4]` |

---

## ⏱️ Complexity Analysis

**Time Complexity:** `O(n)`

* We iterate through the array once.

**Space Complexity:** `O(n)`

* In the worst case, every element satisfies the condition, so the result array stores all elements.

---

## 📚 Key Concepts Learned

* Arrays
* `for` loops
* Functions as arguments (callbacks)
* Conditional statements (`if`)
* `push()` method
* Building a custom version of JavaScript's `Array.filter()`

---

## 🚀 Key Difference Between `map()` and `filter()`

| `map()`                                              | `filter()`                                            |
| ---------------------------------------------------- | ----------------------------------------------------- |
| Transforms every element.                            | Keeps only selected elements.                         |
| Stores the value returned by `fn()`.                 | Stores the original element if `fn()` returns `true`. |
| Output array has the same length as the input array. | Output array may be shorter than the input array.     |

### Example

#### `map()`

```javascript
arr = [1, 2, 3];

fn = (n) => n * 2;

// Output
[2, 4, 6]
```

#### `filter()`

```javascript
arr = [1, 2, 3, 4];

fn = (n) => n % 2 === 0;

// Output
[2, 4]
```

---

## 🎯 Conclusion

This problem demonstrates how JavaScript's `Array.filter()` method works internally. Instead of using the built-in method, we manually iterate through the array, evaluate each element using the provided callback function, and keep only those elements that satisfy the given condition.
