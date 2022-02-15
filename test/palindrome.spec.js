const isPalindrome = require('../palindromeChecker');

describe('palindrome tests', function() {

    it('when empty returns true', function() {
        // Input
        const input = "";
        // Expected
        const expected = true;
        // Actual output
        const actual = isPalindrome(input);
        // Assert
        expect(actual).toBe(expected);
    });
});