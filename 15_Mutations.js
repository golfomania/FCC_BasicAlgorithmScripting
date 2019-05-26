function mutation(arr) {
  var str = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();

  for (var i = 0; i < str2.length; i++) {
    if (str.indexOf(str2[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
