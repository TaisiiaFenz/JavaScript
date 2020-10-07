Array.prototype.splice0 = function(startIndex, deleteCount, ...args) {
    let arr = [];
    arr = arr.concat(this.slice(0, startIndex), args, this.slice(startIndex + deleteCount));
    //just copy :(
    this.length = arr.length;
    for (let i = 0; i < arr.length; i++) {
        this[i] = arr[i];
    }
    return this;
}

