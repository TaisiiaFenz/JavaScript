Object.prototype.assign0 = function (target, ...args) {
    let res = Object(target);
    for (let i = 1; i < arguments.length; i++) {
        let currentObj = Object(arguments[i]);
        let keysCurrentObj = Object.keys(currentObj);
         for (let index = 0; index < keysCurrentObj.length; index++) {
            let key = keysCurrentObj[index];
            res[key] = currentObj[key];
         }
    }
    return res;
}

var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign0(o1, o2, o3);
console.log(obj);
console.log(o1);