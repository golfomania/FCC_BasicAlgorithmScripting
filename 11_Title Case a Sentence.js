function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    let str2 = str[i].split("");
    str2[0] = str2[0].toUpperCase();
    str[i] = str2.join("");
  }
  return (str = str.join(" "));
}

titleCase("I'm a little tea pot");
