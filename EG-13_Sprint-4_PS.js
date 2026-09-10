// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// -------------------------------------------------------------
// 01. Isomorphic Strings
// -------------------------------------------------------------
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    
    const mapST = new Map();
    const mapTS = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        
        if (mapST.has(charS) && mapST.get(charS) !== charT) {
            return false;
        }
        if (mapTS.has(charT) && mapTS.get(charT) !== charS) {
            return false;
        }
        
        mapST.set(charS, charT);
        mapTS.set(charT, charS);
    }
    
    return true;
};

// -------------------------------------------------------------
// 02. Word Pattern
// -------------------------------------------------------------
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;
    
    const pToW = new Map();
    const wToP = new Map();
    
    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i];
        const w = words[i];
        
        if (pToW.has(p) && pToW.get(p) !== w) {
            return false;
        }
        if (wToP.has(w) && wToP.get(w) !== p) {
            return false;
        }
        
        pToW.set(p, w);
        wToP.set(w, p);
    }
    
    return true;
};

// -------------------------------------------------------------
// 03. Find the Difference
// -------------------------------------------------------------
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let charCode = 0;
    for (let i = 0; i < s.length; i++) {
        charCode ^= s.charCodeAt(i);
    }
    for (let i = 0; i < t.length; i++) {
        charCode ^= t.charCodeAt(i);
    }
    return String.fromCharCode(charCode);
};

// -------------------------------------------------------------
// 04. Reverse Linked List
// -------------------------------------------------------------
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    
    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    
    return prev;
};

// -------------------------------------------------------------
// 05. Middle of the Linked List
// -------------------------------------------------------------
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
};

// -------------------------------------------------------------
// 06. Product of Array Except Self
// -------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    
    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
};

// -------------------------------------------------------------
// 07. Remove Nth Node From End of List
// -------------------------------------------------------------
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;
    
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }
    
    while (first !== null) {
        first = first.next;
        second = second.next;
    }
    
    second.next = second.next.next;
    return dummy.next;
};

// -------------------------------------------------------------
// 08. Find First and Last Position of Element in Sorted Array
// -------------------------------------------------------------
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findBound = (isFirst) => {
        let left = 0;
        let right = nums.length - 1;
        let bound = -1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                bound = mid;
                if (isFirst) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return bound;
    };
    
    return [findBound(true), findBound(false)];
};

// -------------------------------------------------------------
// 09. Permutation in String
// -------------------------------------------------------------
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    
    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
    
    for (let i = 0; i < s1.length; i++) {
        count1[s1.charCodeAt(i) - aCode]++;
        count2[s2.charCodeAt(i) - aCode]++;
    }
    
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (count1[i] === count2[i]) matches++;
    }
    
    for (let i = 0; i < s2.length - s1.length; i++) {
        if (matches === 26) return true;
        
        const rightChar = s2.charCodeAt(i + s1.length) - aCode;
        count2[rightChar]++;
        if (count2[rightChar] === count1[rightChar]) {
            matches++;
        } else if (count2[rightChar] === count1[rightChar] + 1) {
            matches--;
        }
        
        const leftChar = s2.charCodeAt(i) - aCode;
        count2[leftChar]--;
        if (count2[leftChar] === count1[leftChar]) {
            matches++;
        } else if (count2[leftChar] === count1[leftChar] - 1) {
            matches--;
        }
    }
    
    return matches === 26;
};

// -------------------------------------------------------------
// 10. Find All Anagrams in a String
// -------------------------------------------------------------
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = [];
    if (s.length < p.length) return result;
    
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
    
    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - aCode]++;
        sCount[s.charCodeAt(i) - aCode]++;
    }
    
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (pCount[i] === sCount[i]) matches++;
    }
    
    for (let i = 0; i <= s.length - p.length; i++) {
        if (matches === 26) {
            result.push(i);
        }
        
        if (i === s.length - p.length) break;
        
        const rightChar = s.charCodeAt(i + p.length) - aCode;
        sCount[rightChar]++;
        if (sCount[rightChar] === pCount[rightChar]) {
            matches++;
        } else if (sCount[rightChar] === pCount[rightChar] + 1) {
            matches--;
        }
        
        const leftChar = s.charCodeAt(i) - aCode;
        sCount[leftChar]--;
        if (sCount[leftChar] === pCount[leftChar]) {
            matches++;
        } else if (sCount[leftChar] === pCount[leftChar] - 1) {
            matches--;
        }
    }
    
    return result;
};
