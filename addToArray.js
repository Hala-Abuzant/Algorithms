var fruits = ["Banana", "Orange", "Apple", "Mango"];

function addFirst(arr, variable) {
    var newarr = [variable];
    for (i = 1; i <= arr.length; i++) {
        newarr[i] = arr[i - 1];
    }
    return newarr;
}

fruits = addFirst(fruits, "kiwi");
console.log(fruits);

function removeAt(arr, position) {
    temp = arr[position];
    arr[position] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    arr.pop();
    return arr;
}


fruits = removeAt(fruits, 1);
console.log(fruits);