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

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

let user = users.find0((item) => item.id == 1);
console.log(user.name);

let someUsers = users.filter0(item => item.id < 3);
console.log(someUsers);