function findLongestWordLength(str) {
  str = str.split(" ");
  str.sort(function(a, b) {
    return b.length - a.length;
  });

  return str[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
