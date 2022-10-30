// GOAL: find the adjecent 1 and 0 pair as the starting point to count 0s
// HOW: divide the array into half and check the middlepoint

// mp = 0
    // mp is the first element in the array -----> the array is all 0s
    // if not, check if the left element of mp is 1
        // if so, we find the adjecent 1 and 0 pair -----> count 0s
        // if not (so it's still another 0), it means 1 (if exists) still in the left side of the array ----> we move rightpointer to the left
// mp = 1
    // mp is the last element of the array -----> the array has no 0
    // if not, check if the right element of mp is 0
        // if so, we find the adjecent 1 and 0 pair -----> count 0s
        // if not (so it's still another 1), it means 0 (if exists) still in the right side of the array -----> we move the leftpointer to the right

// consider edge ccases first:
    // array is all 0s
    // array is all 1s

function countZeroes(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer <= rightPointer) {

    let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

    if (arr[middlePointer] === 0) {
      if (middlePointer === 0) {
        return arr.length;
      } else {
        if (arr[middlePointer - 1] === 1) {
          return arr.length - middlePointer;
        } else {
          rightPointer = middlePointer - 1;
        }
      }
      
    } else {
      if (middlePointer === arr.length - 1) {
        return 0;
      } else {
        if (arr[middlePointer + 1] === 0) {
          return arr.length - middlePointer - 1;
        } else {
          leftPointer = middlePointer + 1;
        }
      }
    }
  }
}

module.exports = countZeroes;
