/**
 * @param {any[]} arr
 * @param {number} n
 * @return {any[]}
 */
function flat(arr, n) {
  if (n <= 0) return arr;

  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flat(item, n - 1));
    } else {
      result.push(item);
    }
  }

  return result;
}