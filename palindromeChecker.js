function isPalindrome(inputStr) {
    return inputStr === inputStr.split('').reverse().join('');
}

module.exports = isPalindrome;