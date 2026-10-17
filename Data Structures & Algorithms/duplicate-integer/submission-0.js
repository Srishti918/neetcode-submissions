class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let flag = false;
        nums.sort();
        for(let i=0;i<nums.length;i++){
            if(nums[i]===nums[i+1]){
                flag = true;
            }
        }
        return flag;
    }
}
