function largestOfFour(arr) {
  // itterate through arr an sort sub arrays from big to small
  for (let i = 0; i < arr.length; i++) {
    arr[i].sort(function(a, b) {
      return b - a;
    });
  }
  //add new Array
  var arr2 = [];
  //itterate though arr an push firts number from sub array to new array
  for (let y = 0; y < arr.length; y++) {
    arr2.push(arr[y][0]);
  }
  return arr2;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
