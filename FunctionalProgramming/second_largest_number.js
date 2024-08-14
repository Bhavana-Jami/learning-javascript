let arr = [1, 2, 2, 1, 5, 4];
let i = arr.length;
second_largest = 0
console.log(arr);
while (i >= 0) {
    let j = arr.length - 1;
    while (j >=0) {
        if (arr[i] < arr[j]) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp
        }
        j--
    }
    i--
    // return arr
}
console.log(arr[1]);