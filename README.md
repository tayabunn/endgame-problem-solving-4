# 🚀 Endgame-13 Sprint-4 Problem Solving

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

---

## 📌 Overview

This repository contains clean, optimized JavaScript solutions for the **Endgame-13 Sprint-4 Problem Solving Assignment**. All 10 challenges are implemented inside a single centralized file following exact specifications and function signatures.

- **Target File:** [`EG-13_Sprint-4_PS.js`](./EG-13_Sprint-4_PS.js)
- **Primary Language:** JavaScript (ES6+)

---

## 📊 Summary of Problems & Complexity

| # | Problem Name | Technique / Pattern | Time Complexity | Space Complexity |
|:---:|:---|:---|:---:|:---:|
| **01** | **Isomorphic Strings** | Hash Map Bi-directional Mapping | $O(N)$ | $O(1)$ |
| **02** | **Word Pattern** | Dual Hash Map Bijection | $O(N)$ | $O(N)$ |
| **03** | **Find the Difference** | Bitwise XOR Manipulation | $O(N)$ | $O(1)$ |
| **04** | **Reverse Linked List** | Iterative 3-Pointer Reversal | $O(N)$ | $O(1)$ |
| **05** | **Middle of the Linked List** | Fast & Slow Pointer (Tortoise & Hare) | $O(N)$ | $O(1)$ |
| **06** | **Product of Array Except Self** | Two-pass Prefix & Suffix Products | $O(N)$ | $O(1)^*$ |
| **07** | **Remove Nth Node From End** | Two-pointer Offset with Dummy Head | $O(N)$ | $O(1)$ |
| **08** | **Find First & Last Position in Sorted Array** | Binary Search (Left & Right Boundaries) | $O(\log N)$ | $O(1)$ |
| **09** | **Permutation in String** | Sliding Window & Frequency Counter | $O(N)$ | $O(1)$ |
| **10** | **Find All Anagrams in a String** | Sliding Window & Frequency Matching | $O(N)$ | $O(1)$ |

*\* Excluding the output array.*

---

## 🧩 Problem Breakdown

### 1. Isomorphic Strings
- **Function:** `isIsomorphic(s, t)`
- **Concept:** Validates whether each character in string `s` maps one-to-one to a unique character in `t` without collision or order distortion.

### 2. Word Pattern
- **Function:** `wordPattern(pattern, s)`
- **Concept:** Establishes a strict bijective mapping between individual pattern characters and whitespace-separated words in string `s`.

### 3. Find the Difference
- **Function:** `findTheDifference(s, t)`
- **Concept:** Utilizes the properties of XOR ($a \oplus a = 0$ and $a \oplus 0 = a$) across character ASCII codes to find the single inserted character in $O(1)$ auxiliary space.

### 4. Reverse Linked List
- **Function:** `reverseList(head)`
- **Concept:** In-place iterative traversal updating pointer directions without memory allocation.

### 5. Middle of the Linked List
- **Function:** `middleNode(head)`
- **Concept:** Fast pointer moves at $2\times$ speed while slow pointer moves at $1\times$ speed; when fast reaches the end, slow is at the middle node.

### 6. Product of Array Except Self
- **Function:** `productExceptSelf(nums)`
- **Concept:** Computes cumulative prefix products going forward, then multiplies with cumulative suffix products going backward, strictly avoiding division.

### 7. Remove Nth Node From End of List
- **Function:** `removeNthFromEnd(head, n)`
- **Concept:** Employs a dummy node and advances a first pointer $n+1$ steps ahead to position a second pointer directly before the node to be removed.

### 8. Find First and Last Position of Element in Sorted Array
- **Function:** `searchRange(nums, target)`
- **Concept:** Dual binary search runs: one biased left to locate the starting index and one biased right to locate the ending index in $O(\log N)$ time.

### 9. Permutation in String
- **Function:** `checkInclusion(s1, s2)`
- **Concept:** Fixed-size sliding window of length `s1.length` tracking 26-character frequency matches incrementally.

### 10. Find All Anagrams in a String
- **Function:** `findAnagrams(s, p)`
- **Concept:** Sliding window over string `s` matching the character frequency distribution of pattern `p`.

---

## 📂 Project Structure

```bash
endgame-problem-solving-4/
├── EG-13_Sprint-4_PS.js    # All 10 problem solutions with full boilerplates
└── README.md               # Repository documentation and problem breakdown
```

---

## 🛠️ How to Run & Test

You can run test cases using Node.js:

```bash
# Verify with Node.js
node -e "
const fs = require('fs');
eval(fs.readFileSync('EG-13_Sprint-4_PS.js', 'utf8'));

console.log('Isomorphic:', isIsomorphic('egg', 'add')); // true
console.log('Word Pattern:', wordPattern('abba', 'dog cat cat dog')); // true
console.log('Find Diff:', findTheDifference('abcd', 'abcde')); // 'e'
"
```

---

## 👤 Author

- **GitHub:** [@tayabunn](https://github.com/tayabunn)
- **Repository:** [endgame-problem-solving-4](https://github.com/tayabunn/endgame-problem-solving-4)
