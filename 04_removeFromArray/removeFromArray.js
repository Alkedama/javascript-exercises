const removeFromArray = function(array, removeElement, removeMultipleElement) {
    array.splice(2, 1);

    return array;
};

console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
