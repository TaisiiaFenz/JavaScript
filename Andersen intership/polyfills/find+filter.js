Array.prototype.find0 = function(func) {
    if (!((typeof(func) == "Function")||(typeof(func) == "function"))) return;

    for (let i = 0; i < func.length; i++) {
        if (func(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}

Array.prototype.filter0 = function(func) {

}