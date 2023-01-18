function target(arr, t) {
    var sum = 0;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            sum = arr[j] + arr[j + 1];
            if (sum == t) {
                newArr.push(j, j + 1)
            }
        }
        return newArr;
    }
}

var result = target([1, 3, 5], 8);
console.log(result);

function target(arr, t) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++) {
            sum = arr[i] + arr[j];
            if (sum == t) {
                return [i, j];
            }
        }
    }
}

var result = target([1, 3, 5, 4], 7);
console.log(result);