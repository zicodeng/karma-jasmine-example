import MathUtils from 'utils/math';

// describe defines a suite that groups related specs as test cases.
// describe has two parameters:
// p1: name or title for a suite (usually what is being tested)
// p2: function that implements the suite.
describe('MathUtils', function() {
    let calc;

    // This will be called before running each spec.
    beforeEach(function() {
        calc = new MathUtils();
    });

    // `it` is a global Jasmine function that defines a spec.
    // A spec represents a test case inside the test suite.
    // A spec contains one or more expectations.
    // Each expectation represents an assertion that can be either true or false.
    // In order to pass the spec, all of the expectations inside the spec have to be true.
    // If one or more expectations inside a spec is false, the spec fails.
    it('should be able to calculate sum of 3 and 5', function() {
        expect(calc.sum(3, 5)).toEqual(8);
    });

    // Spec for multiply operation.
    it('should be able to multiply 10 and 40', function() {
        expect(calc.multiply(10, 40)).toEqual(400);
    });

    // Spec for factorial operation for positive number.
    it('should be able to calculate factorial of 9', function() {
        expect(calc.factorial(9)).toEqual(362880);
    });

    // Spec for factorial operation for negative number.
    it('should be able to throw error in factorial operation when the number is negative', function() {
        expect(function() {
            calc.factorial(-7);
        }).toThrowError(Error);
    });
});
