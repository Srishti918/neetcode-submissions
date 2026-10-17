class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(let num of nums){
            map.set(num,(map.get(num) || 0)+1)
        }
        let arr=Array.from(map.entries());
        arr.sort((a,b)=>b[1]-a[1]);
        return arr.slice(0,k).map(entry=>entry[0]);
    }
}
//Time complexity: \(O(n + m\log m)\) — counting takes \(O(n)\), and sorting takes \(O(m\log m)\).

//Space complexity: \(O(m)\) for the frequency map and sorted entries, excluding the output.