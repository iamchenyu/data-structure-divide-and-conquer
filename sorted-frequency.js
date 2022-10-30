function sortedFrequency(arr, val) {
  const startIndex = findStart(arr, val);
  const endIndex = findEnd(arr, val);
  if (startIndex === -1 || endIndex === -1) {
    return -1;
  } else {
    return endIndex - startIndex + 1;
  }
}

function findStart(arr, val, low = 0, high = arr.length - 1) {
  if (low <= high) {
    let middle = Math.floor((low + high) / 2);

    if ((middle === 0 || arr[middle - 1] < val) && arr[middle] === val) {
      return middle;
    } else if (arr[middle] < val) {
      return findStart(arr, val, (low = middle + 1), high);
    } else {
      return findStart(arr, val, low, (high = middle - 1));
    }
  }
  return -1;
}

function findEnd(arr, val, low = 0, high = arr.length - 1) {
  if (low <= high) {
    let middle = Math.floor((low + high) / 2);

    if (
      (middle === arr.length - 1 || arr[middle + 1] > val) &&
      arr[middle] === val
    ) {
      return middle;
    } else if (arr[middle] > val) {
      return findEnd(arr, val, low, (high = middle - 1));
    } else {
      return findEnd(arr, val, (low = middle + 1), high);
    }
  }
  return -1;
}

module.exports = sortedFrequency;
