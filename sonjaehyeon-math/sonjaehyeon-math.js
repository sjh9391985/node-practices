exports.sum = function(){
    let sum = 0;

    Array.from(arguments).forEach(e => {
        sum+=e;
    });
    return sum;
}

exports.max = function(){
    let max = Number.MAX_SAFE_INTEGER;

    Array.from(arguments).forEach(e => {
        max = e > max ? max:e
    });
    return max;
}

exports.min = function(){
    let min = Number.Min_SAFE_INTEGER;

    Array.from(arguments).forEach(e => {
        min = e < min ? min:e
    });
    return min;
}



