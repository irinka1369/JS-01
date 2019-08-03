1. https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
    const circumference = 2 * Math.PI * circle.radius;
    return circumference;
};

2. https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties/train/javascript

function whatNumberIsIt(n) {
    //coding here
    if (n === Number.MAX_VALUE) {
        return "Input number is Number.MAX_VALUE";
    } else if (n === Number.MIN_VALUE) {
        return "Input number is Number.MIN_VALUE";
    } else if (Number.isNaN(n)) {
        return "Input number is Number.NaN";
    } else if (n === Number.NEGATIVE_INFINITY) {
        return "Input number is Number.NEGATIVE_INFINITY";
    } else if (n === Number.POSITIVE_INFINITY) {
        return "Input number is Number.POSITIVE_INFINITY";
    } else {
        return "Input number is " + n;
    }
};

3. https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n) {
    var res = [];
    for (let i = 0; i < n; i++) {
        res.push(function () {
            return (i);
        });
    };
    return res;
};
