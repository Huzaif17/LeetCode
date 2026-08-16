# 2626. Array Reduce Transformation

## Problem

Given an integer array `nums`, a reducer function `fn`, and an initial value `init`, return the final result obtained by executing the `fn` function on each element of the array.

The result of each calculation is passed as the first argument to the next calculation.

The solution must be implemented **without using the built-in `Array.reduce()` method**.

### Example

```text
Input:
nums = [1, 2, 3, 4]
fn = function sum(accum, curr) {
    return accum + curr;
}
init = 0

Output:
10
```

### Explanation

The function is executed sequentially:

```text
fn(0, 1) → 1
fn(1, 2) → 3
fn(3, 3) → 6
fn(6, 4) → 10
```

Therefore, the final result is `10`.

---

## Approach

We can simulate the behavior of `Array.reduce()` using a `for` loop.

1. Store `init` in a variable called `result`.
2. Loop through every element in `nums`.
3. Call `fn(result, nums[i])`.
4. Store the returned value back in `result`.
5. Return `result` after the loop finishes.

If the array is empty, the loop does not execute, so `init` is returned directly.

---

## Solution

```javascript
var reduce = function(nums, fn, init) {
    let result = init;

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    return result;
};
```

---

## Complexity

### Time Complexity

```text
O(n)
```

We visit every element of the array exactly once.

### Space Complexity

```text
O(1)
```

We only use one extra variable, `result`.

---

## Key Concept

The important line is:

```javascript
result = fn(result, nums[i]);
```

This carries the result of the previous calculation into the next iteration, which is exactly how `Array.reduce()` works.

For example:

```text
init = 0

0 → 1 → 3 → 6 → 10
```

---

## LeetCode

**Problem:** 2626. Array Reduce Transformation
**Difficulty:** Easy
**Topic:** JavaScript, Arrays, Higher-Order Functions
