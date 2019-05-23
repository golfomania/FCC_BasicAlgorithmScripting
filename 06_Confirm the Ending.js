function confirmEnding(str, target) {
  //extracting a string from str with the length of target beginning target.length from the end (negative number)
  str = str.substr(-target.length);
  //if new str equals trarget str ends with tagegt string
  return str == target;
}

confirmEnding("Bastian", "n");
