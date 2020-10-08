Object.prototype.assign0 = function (target, ...args) {
    const res = Object(target);
    for (let i = 1; i < arguments.length; i++) {
        const currentObj = Object(arguments[i]);
        const keysCurrentObj = Object.keys(currentObj);
         for (let index = 0; index < keysCurrentObj.length; index++) {
            const key = keysCurrentObj[index];
            res[key] = currentObj[key];
         }
    }
    return res;
}
