class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         let numSet = new Set(nums);
         let longest = 0;

         for (let num of numSet) {
            // Start only at the beginning of a sequence
            if (!numSet.has(num - 1)) {
                let current = num;
                let count = 1;

                while (numSet.has(current + 1)) {
                    current++;
                    count++;
                }

                longest = Math.max(longest, count);
            }
    }

    return longest;
        
}
}
