function chunkArrayInGroups(arr, size) {
  var arr2 = [];
  var arr2pos = 0;
  var arrpos = 0;
  while (arrpos < arr.length) {
    arr2[arr2pos] = arr.slice(arrpos, arrpos + size);
    arrpos += size;
    arr2pos++;
  }
  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
