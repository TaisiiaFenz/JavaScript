Array.prototype.slice0 = function(startIndex, finishIndex) {
    let array = [];
    if (startIndex >= 0) {
        if (arguments.length == 1) {
            finishIndex = this.length;
        }
        if (finishIndex < 0) {
            finishIndex = this.length + finishIndex;
        }
        for (let i = startIndex; (i < finishIndex)&&(i < this.length); i++) {
            array.push0(this[i]);
        }
    }
    else {
        if (Math.abs(startIndex) > this.length) {
            startIndex = -this.length;
        }
        for (let i = this.length + startIndex; i < this.length; i++) {
            array.push0(this[i]);
        }
    }
    //just copy :(
    this.length = array.length;
    array.forEach((element, index) => this[index] = element);
    return this;
}