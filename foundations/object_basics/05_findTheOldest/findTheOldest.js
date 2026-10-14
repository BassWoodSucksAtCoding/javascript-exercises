const findTheOldest = function(people) {
    sortedArr = people.sort((a,b) => {
            let ageA = (a.yearOfDeath) ? a.yearOfDeath - a.yearOfBirth : new Date().getFullYear() - a.yearOfBirth;
            let ageB = (b.yearOfDeath) ? b.yearOfDeath - b.yearOfBirth : new Date().getFullYear() - b.yearOfBirth;
            return ageB - ageA;
    })
    return sortedArr[0]
};

// Do not edit below this line
module.exports = findTheOldest;
