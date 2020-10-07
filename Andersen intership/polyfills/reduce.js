Array.prototype.reduce0 = function(func, initial) {
    this.forEach((item, index, array) => {
        if (initial !== undefined) {
            initial = func(initial, item, index, array);
        } else {
            initial = item;
        }
    });
    return initial;
}