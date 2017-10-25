const MathUtils = function() {
    // Empty constructor.
};

MathUtils.prototype = (function() {
    const sum = function(number1, number2) {
        return number1 + number2;
    };

    const substract = function(number1, number2) {
        return number1 - number2;
    };

    const multiply = function(number1, number2) {
        return number1 * number2;
    };

    const divide = function(number1, number2) {
        return number1 / number2;
    };

    const average = function(number1, number2) {
        return (number1 + number2) / 2;
    };

    const factorial = function(number) {
        if (number < 0) {
            throw new Error('There is no factorial for negative numbers');
        } else if (number == 1 || number == 0) {
            return 1;
        } else {
            return number * this.factorial(number - 1);
        }
    };

    return {
        sum: sum,
        subtract: substract,
        multiply: multiply,
        divide: divide,
        average: average,
        factorial: factorial
    };
})();

export default MathUtils;
