Array.prototype.reverse0 = function() {
    for (let i = 0; i < this.length/2; i++) {
        let temp = this[i];
        this[i] = this[this.length - 1 - i];
        this[this.length - 1 - i] = temp;
    }
}