const object1 = { a: 1 };
const object2 = { b: 2 };
const object3 = { c: 3 };

const objectRes1 = Object.assign0(object1, object2, object3);
console.log(objectRes1);
console.log(object1);

const object4 = { foo: "bar", baz: 42 };
console.log(Object.entries0(object4));

console.log(Object.keys(objectRes1));
