function findFloor(arr, val, low = 0, high = arr.length - 1) {
  if (val < arr[0]) return -1;
  if (val >= arr[arr.length - 1]) return arr[arr.length - 1];

  let m = Math.floor((low + high) / 2);

  if (arr[m] === val || (arr[m] < val && arr[m + 1] > val)) return arr[m];

  if (arr[m] > val) return findFloor(arr, val, low, (high = m - 1));

  if (arr[m] < val && arr[m + 1] <= val)
    return findFloor(arr, val, (low = m + 1), high);
}

module.exports = findFloor;

//   for line 7 to line 11
//   if (arr[m] === val) {
//     return arr[m];
//   } else if (arr[m] > val) {
//     return findFloor(arr, val, low, (high = m - 1));
//   } else {
//     if (arr[m + 1] <= val) {
//       return findFloor(arr, val, (low = m + 1), high);
//     } else {
//       return arr[m];
//     }
//   }
