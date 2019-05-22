function factorialize(num) {
  if (num == 0) {
    return 1;
  } else {
    var result = num;
    for (var i = num; i > 1; i--) {
      result *= i - 1;
    }
    return result;
  }
}
