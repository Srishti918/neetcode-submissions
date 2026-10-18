class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric characters on the left
        if (!/[a-z0-9]/i.test(s[left])) {
            left++;
            continue;
        }

        // Skip non-alphanumeric characters on the right
        if (!/[a-z0-9]/i.test(s[right])) {
            right--;
            continue;
        }

        // Compare characters without case sensitivity
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}
}
