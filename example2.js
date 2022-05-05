// Array Search
function numberOfItems(arr, item) {
  let flatArr = arr.flat(Infinity);
  let count = 0;
  for (var i = 0; i < flatArr.length; i++) {
    if (flatArr[i] === item) {
      count++;
    }
  }
  return count;
}

var arr = [25, "apple", ["banana", "strawberry", "apple", 25]];
console.log(numberOfItems(arr, 25)); // 2
console.log(numberOfItems(arr, "apple")); // 2
