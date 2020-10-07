Array.prototype.slice0 = function(startIndex, finishIndex) {
    let arr = [];
    if (startIndex >= 0) {
        if (arguments.length == 1) finishIndex = this.length;
        if (finishIndex < 0) {
            finishIndex = this.length + finishIndex;
        }
        for (let i = startIndex; (i < finishIndex)&&(i < this.length); i++) {
            arr.push0(this[i]);
        }
    }
    else {
        if (Math.abs(startIndex) > this.length) {
            startIndex = -this.length;
        }
        for (let i = this.length + startIndex; i < this.length; i++) {
            arr.push0(this[i]);
        }
    }
    //just copy :(
    this.length = arr.length;
    for (let i = 0; i < arr.length; i++) {
        this[i] = arr[i];
    }
    return this;
}