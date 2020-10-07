Array.prototype.find0 = function(func) {
    if (!((typeof(func) == "Function")||(typeof(func) == "function"))) return;

    for (let i = 0; i < this.length; i++) {
        if (func(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}

Array.prototype.filter0 = function(func, thisArg) {
    if (!((typeof(func) == "Function")||(typeof(func) == "function"))) return;
    let res = [];

    if (thisArg === undefined) {
        for (let i = 0; i < this.length; i++) {
            if (func(this[i], i, this)) {
                res.push(this[i]);
            }
        }
    } else {
        for (let i = 0; i < this.length; i++) {
            if (func.call(thisArg, this[i], i, this)) {
                res.push(this[i]);
            }
        }
    }
    return res;
}