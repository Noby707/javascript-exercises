// const getTheTitles = function(books) {
//     let arr = [];
//     books.forEach(element => {
//         arr.push(element.title);
//     });
//     return arr;
// };


const getTheTitles = function(books) {
    let arr = books.map(el => el.title);
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
