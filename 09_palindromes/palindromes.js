const palindromes = function (palArray) {
    const revPalArray = [];
    let palString = palArray.length;
    for (let i = 0; i < palString; i++) {
        revPalArray.unshift(palArray[i])
    }
    const revPalString = revPalArray.join("");
    if (palArray == revPalString) {
        return true;
    }
    else {
        return false;
    }
};


// Do not edit below this line
module.exports = palindromes;
