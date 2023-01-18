var arr = [1, -1, 7, 3];
var arrNew = [];

for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) {
        arrNew.push(arr[i + 1]);
    }
    else {
        arrNew.push(arr[i]);

    }
    if (arrNew[arrNew.length - 1] == arrNew[arrNew.length - 2]) {

        arrNew.pop(arrNew[arrNew.length - 1]);
    }
}
console.log(arrNew);