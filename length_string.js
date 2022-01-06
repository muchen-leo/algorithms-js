/**
 * 给定一个字符串 s ，找出其中不含有重复字符的'最长子串'的长度。
 * 解法：滑动窗口
 * 时间复杂度：O(n)
 * 
 * @param {*} s 字符串
 * @returns 
 */
const lengthOfLongestSubstring = (s) => {
  if (s.length === 0) {
    return 0;
  }
  const map = new Map();
  let  max = 0, left = 0;
  const n = s.length
  for (i = 0;i < n; i++) {
    if(map.has(s.charAt(i))) {
      left = Math.max(left, map.get(s.charAt(i))+1);
    }
    map.set(s.charAt(i), i)
    max = Math.max(max, i - left + 1)
  }
  return max;
}

const test = async() => {
  const s = 'abcab'
  const result = await lengthOfLongestSubstring(s);
  console.log('result: ' + result);
}

test();
