function repeatStringNumTimes(str, num) {
  var str2 = "";
  if (num > 0) {
    for (let i = num; i > 0; i--) {
      str2 += str;
    }
    return str2;
  } else {
    return "";
  }
}
repeatStringNumTimes("abc", 3);
