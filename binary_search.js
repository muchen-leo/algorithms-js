/**
 * 二分查找
 * 
 * @param {number[]} array 数组
 * @param {number} target 目标值
 * @returns {number} 下标
 */
binary_search = (array, target) => {
  if (array.length === 0) {
    return -1;
  }
  let low = 0, high = array.length - 1;
  while(low <= high) {
    let mid = Math.floor(low + (high - low) / 2); 
    if (target === array[mid]) {
      return mid;
    } else if (target > array[mid]) {
      low = mid + 1;
    } else if (target < array[mid]) {
      high = mid -1;
    } else {
      return -1;
    }
  }
};

test = () => {
  var arr = [5, 13, 19, 21, 37, 56, 64, 75, 80, 88, 92];
  var result = binary_search(arr, 91);
  console.log(result);
}

test();
