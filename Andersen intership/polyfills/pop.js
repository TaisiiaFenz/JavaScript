Array.prototype.pop0 = function() {
    this.splice(this.length - 1, 1);
    return this;
}

arr2.pop0();
console.log(arr2);