function findRotationCount(arr) {
  maxIndex = findMaxIndex(arr);
  if (maxIndex === arr.length - 1) {
    return 0;
  } else {
    return maxIndex + 1;
  }
}

function findMaxIndex(arr, low = 0, high = arr.length - 1) {
  if (low > high) return;
  if (arr[0] <= arr[high]) return high;

  let m = Math.floor((low + high) / 2);
  if (arr[m] > arr[m + 1]) return m;
  if (arr[m] < arr[m + 1] && arr[m] < arr[m - 1]) return m - 1;
  if (arr[m - 1] < arr[m] < arr[m + 1]) {
    if (arr[m] < arr[0]) return findMaxIndex(arr, low, (high = m - 1));
    else {
      return findMaxIndex(arr, (low = m + 1), high);
    }
  }
}

module.exports = findRotationCount;
