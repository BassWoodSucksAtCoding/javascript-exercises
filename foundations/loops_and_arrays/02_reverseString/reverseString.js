const reverseString = function(str) {
    let newStrArr = []
    for (const letter of str) {
        newStrArr.unshift(letter);
    }
    return newStrArr.join("");
};

console.log(reverseString('hey'))

// Do not edit below this line
module.exports = reverseString;
