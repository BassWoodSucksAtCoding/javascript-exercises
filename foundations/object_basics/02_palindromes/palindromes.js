const palindromes = function (word) {
    arr = [...word];
    alphabetOnlyArr = arr.filter(element => /^[A-Z0-9]+$/i.test(element));

    const middle = Math.floor(alphabetOnlyArr.length / 2)
    let palindrome = true
    alphabetOnlyStr = alphabetOnlyArr.join("")
    for (i = 0; i <= middle; i++) {
        if (alphabetOnlyStr.at(i).toLowerCase() !== alphabetOnlyStr.at(-i-1).toLowerCase()) {
            palindrome = false
            break
        }
    }
    return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
