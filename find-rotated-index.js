function findRotatedIndex(arr, val) {
  maxIndex = findMaxIndex(arr);
  if (val >= arr[0]) {
    return findIndex(arr, val, (low = 0), (high = maxIndex));
  } else {
    return findIndex(arr, val, (low = maxIndex + 1), (high = arr.length - 1));
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

function findIndex(arr, val, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  let m = Math.floor((low + high) / 2);

  if (arr[m] === val) {
    return m;
  } else if (arr[m] < val) {
    return findIndex(arr, val, (low = m + 1), high);
  } else {
    return findIndex(arr, val, low, (high = m - 1));
  }
}

module.exports = findRotatedIndex;
