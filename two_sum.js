/**
 * 两数求和
 * 解法：暴力枚举
 * 时间复杂度：O(n^2)
 * 空间复杂度：
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
 let twoSum1 = (nums, target) => {
  if (nums.length === 0) {
    return [0];
  }
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++){
      if (nums[i] + nums[j] === target) 
        return [i, j];
    }
  };  
  return [0];
}

/**
 * 解法：哈希表
 * 时间复杂度：O(N) N是数组元素的数量，对于每一个元素x，可以O(1)寻找‘target - x’
 * 空间复杂度：O(N) N是数组中元素的数量，主要为哈希表的开销
 * 
 * @param {number[]} nums
 * @param {number} target
 * @@returns {number[]}
 */
 let twoSum2 = (nums, target) => {
  map = new Map()
  for (let i = 0; i < nums.length; i++) {
    x = target - nums[i]
    if(map.has(x)) {
      return [map.get(x),i]
    }
    map.set(nums[i],i)
  }
};

const nums = [2, 4, 5, 6], target = 10;

test = async() => {
  const sum1 = await twoSum2(nums, target);
  console.log("枚举:" + sum1);
  const sum2 = await twoSum2(nums, target);
  console.log("哈希表:"+ sum2);
} 

test();
