//const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
const concat = Function.bind.call(Function.call, Array.prototype.concat);
//const keys = Reflect.ownKeys;

Object.prototype.entries0 = function(obj) {
    const res = [];
    const keys = Reflect.ownKeys(obj);
    for(let key of keys) {
        let currArr = [];
        currArr.push(key, obj[key]);
        res.push(currArr);
    }
    //return Object.reduce(keys(obj), (e, k) => concat(e, typeof k === 'string' && isEnumerable(obj, k) ? [[k, obj[k]]] : []), []);
    return res;
}
