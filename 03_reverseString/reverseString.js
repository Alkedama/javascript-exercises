const reverseString = function() {
    let String = "";
    let ReverseString = String.split("").reverse().join("");
    
    return ReverseString;
    
};

console.log(reverseString());

// Do not edit below this line
module.exports = reverseString;
