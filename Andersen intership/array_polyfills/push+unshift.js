Array.prototype.push0 = function() {
    for (let argument of arguments) {
        this[this.length] = argument;
    }
    return this.length;
}

Array.prototype.unshift0 = function() {
    const array = [];
    for (let argument of arguments) {
        array[array.length] = argument;
    }
    this.forEach((element) => array[array.length] = element);
    array.forEach((element, index) => this[index] = element);

    return this.length;
}

Array.prototype.unshift1 = function() {
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + arguments.length] = this[i];
    }
    let i = 0;
    for (let argument of arguments) {
        this[i] = argument;
        i++;
    }
    return this.length;
}

Array.prototype.unshift2 = function(){
    Array.prototype.splice.call(arguments, 0, 0, 0, 0);
    Array.prototype.splice.apply(this, arguments);
    return this.length;
};
