const getTheTitles = function() {
    
const array = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
];


return array.map((book) => { book.author});

};

console.log(getTheTitles());

// Do not edit below this line
module.exports = getTheTitles;
