a = [4, 3, 12, 1, 8, 9];

function ordenaArray(array) {
  let temporal = 0;
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        temporal = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporal;
      }
    }
  }
}

console.log(a);
ordenaArray(a);
console.log(a);