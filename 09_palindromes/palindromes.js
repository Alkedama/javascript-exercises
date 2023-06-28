const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverseString = processedString.split("").reverse().join("");

    return reverseString === processedString;

};

console.log(palindromes('racecar'));

// Do not edit below this line
module.exports = palindromes;
