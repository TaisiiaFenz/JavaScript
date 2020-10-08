Array.prototype.splice0 = function(startIndex, deleteCount, ...args) {
    let array = [];
    array = array.concat(this.slice(0, startIndex), args, this.slice(startIndex + deleteCount));
    //just copy :(
    this.length = array.length;
    array.forEach((element, index) => this[index] = element);
    return this;
}

