// 1.

let array1 = [1, 2, 3, 4, 5];
array1.splice(0, 1, 2, "a", "b", "c");
console.log(array1);


// 2.

let array4 = [1, 2, 3, 4, 5];
let Sum = 0;
array4.forEach(i => {
    Sum += i;
});
console.log(Sum);


// 4.

let array2 = [2,15,10,24];
let array2Without10 = array2.splice(2, 1);

console.log(array2);
console.log(array2Without10);


// 5.

let arrayNumbers = [12, 25, 3, 6, 8, 14, 7, 23];

let dividedNumbers = arrayNumbers.map((number) => {
    return number / 3;
})
console.log(dividedNumbers);


// 6.


let languages = ['html', 'css', 'javascript', 'python', 'php'];

let result = languages.filter((word) => word.length > 3);
console.log(result);



// 8.

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let unitedArr = arr1.concat(arr2, arr3)
console.log(unitedArr);

// 9.

let arr = [-1, -2, -3, 4]; 
let positiveArr = arr.some((positiveNum) => {
    if (positiveNum > 0 ) {
        return true;
    } 
    else {
        return false;
    }
})
console.log(positiveArr);