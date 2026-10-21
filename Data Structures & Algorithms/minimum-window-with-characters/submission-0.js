class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length === 0 || t.length > s.length) {
return "";
}

const need = new Map();
const window = new Map();

// Count required characters
for (const char of t) {
    need.set(char, (need.get(char) || 0) + 1);
}

const required = need.size;
let formed = 0;

let left = 0;
let minLength = Infinity;
let minStart = 0;

for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // Add the current character to the window
    window.set(char, (window.get(char) || 0) + 1);

    // Check if this character now satisfies its requirement
    if (
        need.has(char) &&
        window.get(char) === need.get(char)
    ) {
        formed++;
    }

    // Shrink the window while it is valid
    while (formed === required) {
        const currentLength = right - left + 1;

        if (currentLength < minLength) {
            minLength = currentLength;
            minStart = left;
        }

        const leftChar = s[left];

        // Remove the leftmost character
        window.set(
            leftChar,
            window.get(leftChar) - 1
        );

        // A requirement becomes unsatisfied if
        // its count falls below the required count
        if (
            need.has(leftChar) &&
            window.get(leftChar) < need.get(leftChar)
        ) {
            formed--;
        }

        left++;
    }
}
return minLength === Infinity
    ? ""
    : s.slice(minStart, minStart + minLength);
    }
}
