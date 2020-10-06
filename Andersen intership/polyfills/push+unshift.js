Array.prototype.push0 = function() {
    for (let argument of arguments) {
        this[this.length] = argument;
    }
    return this.length;
}

Array.prototype.unshift0 = function() {
    let arr = [];
    for (let argument of arguments) {
        arr[arr.length] = argument;
    }
    this.forEach((elem) => arr[arr.length] = elem);
    arr.forEach((elem, index) => this[index] = elem);

    return this.length;
}

Array.prototype.unshift1 = function() {
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + arguments.length] = this[i];
        console.log("he");
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

const arr1 = [1, 2, 3];
arr1.push0(4, 5, 6, 7);
console.log(arr1);

const arr2 = [1, 3, 5];
arr2.unshift2(2, 4, 6, 8);
console.log(arr2);