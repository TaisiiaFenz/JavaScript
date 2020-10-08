Array.prototype.reverse0 = function() {
    for (let i = 0; i < this.length/2; i++) {
        const temp = this[i];
        const length = this.length -1 - i;
        this[i] = this[length];
        this[length] = temp;
    }
}