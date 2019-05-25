function truncateString(str, num) {
  if (str.length > num) {
    str = str.split("");
    str = str.slice(0, num);
    str.push("...");
    str = str.join("");
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
