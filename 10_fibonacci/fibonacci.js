const fibonacci = function(num) {
    let result = 0;
    let array = [];
    let nothing;
    
    array.push(0);

    result += 1;

    array.push(result);

    array.push(result);
    for (let i = 0; i < num; i++) {
        let index = array.length - 2;
        let precededIndex = array[index];

        result += precededIndex;
        array.push(result);
    }

    return array[num];

};

console.log(fibonacci(25));


// Do not edit below this line
module.exports = fibonacci;
