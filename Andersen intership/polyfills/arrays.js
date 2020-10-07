const arr1 = [1, 2, 3];
arr1.push0(4, 5, 6, 7);
console.log(arr1);

const arr2 = [1, 3, 5];
arr2.unshift2(2, 4, 6, 8);
console.log(arr2);

arr2.pop0();
console.log(arr2);

arr2.splice0(2, 3, 10, 11);
console.log(arr2);

arr2.slice0(2, -1);
console.log(arr2);

// let arr3 = [2, 4, 10, 11, 3];
//
// arr3 = arr3.slice(-3, 3);
// console.log(arr3);