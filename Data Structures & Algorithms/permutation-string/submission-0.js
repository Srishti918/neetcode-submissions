class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
    const n = s1.length;
    const m = s2.length;

    if (n > m) {
        return false;
    }

    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);

    // Count characters in s1 and the first window of s2
    for (let i = 0; i < n; i++) {
        count1[s1.charCodeAt(i) - 97]++;
        count2[s2.charCodeAt(i) - 97]++;
    }

    // Compare character frequencies
    function matches() {
        for (let i = 0; i < 26; i++) {
            if (count1[i] !== count2[i]) {
                return false;
            }
        }

        return true;
    }

    if (matches()) {
        return true;
    }

    // Slide the window across s2
    for (let right = n; right < m; right++) {
        // Add the new character
        count2[s2.charCodeAt(right) - 97]++;

        // Remove the character leaving the window
        count2[s2.charCodeAt(right - n) - 97]--;

        if (matches()) {
            return true;
        }
    }

    return false;
        }
}
