Object.prototype.entries0 = function(object) {
    const res = [];
    const keys = Reflect.ownKeys(object);
    for(let key of keys) {
        const currentArray = [];
        currentArray.push(key, object[key]);
        res.push(currentArray);
    }
    return res;
}

Object.prototype.entries1 = function(object) {
    const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
    const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
    const concat = Function.bind.call(Function.call, Array.prototype.concat);
    const keys = Reflect.ownKeys;
    return Object.reduce(keys(object), (e, k) => concat(e, typeof k === 'string' && isEnumerable(object, k) ? [[k, object[k]]] : []), []);
}

Object.prototype.keys0 = function(object) {
    const keys = [];
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

