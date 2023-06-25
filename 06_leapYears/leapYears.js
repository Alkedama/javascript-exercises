const leapYears = function(integer) {

    if(integer % 4 === 0 && integer % 100 !== 0 || integer % 400 === 0) {
        return true;
    } else {
        return false;
    }

};

console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;
