const array1 = [1, 2, 3];
array1.push0(4, 5, 6, 7);
console.log(array1);

const array2 = [1, 3, 5];
array2.unshift2(2, 4, 6, 8);
console.log(array2);

array2.pop0();
console.log(array2);

array2.splice0(2, 3, 10, 11);
console.log(array2);

array2.slice0(2, -1);
console.log(array2);

const users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

const findUser = users.find0((item) => item.id == 1);
console.log(findUser.name);

const someFilterUsers = users.filter0(item => item.id < 3);
console.log(someFilterUsers);

const array3 = [1, 2, 3, 4, 5, 6];
array3.reverse0();
console.log(array3);

const array4 = [2, 5, 5];
const result = array4.reduce0((a, b) => a * b, 2);
console.log(result);