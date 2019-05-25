function bouncer(arr) {
  return arr.filter(function(el) {
    return Boolean(el);
  });
}

bouncer([7, "ate", "", false, 9]);
