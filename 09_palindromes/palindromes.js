const palindromes = function (palArray) {
    const revPalArray = [];
    let palLength = palArray.length;
    for (let i = 0; i <= palLength; i++) {
        revPalArray.unshift(palArray[i])
    }
    return revPalArray;
};
console.log(palindromes('racecar'))

// Do not edit below this line
module.exports = palindromes;
