const findTheOldest = function() {
    const people = [
        {
          name: "Carly",
          yearOfBirth: 1942,
          yearOfDeath: 1970,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
      ];

      const OldAgeMap = people.map((person) => {
        // console.log(person.yearOfDeath - person.yearOfBirth);

        return person;
      });

      const OldAgeSort = OldAgeMap.sort((a, b) => {
        if (a.yearOfBirth > b.yearOfBirth) {
          return 1;
        } else {
            return -1;
        }
      });

 console.table(OldAgeSort);
return OldAgeSort[0].name;
 
};

console.log(findTheOldest());

// Do not edit below this line
module.exports = findTheOldest;
