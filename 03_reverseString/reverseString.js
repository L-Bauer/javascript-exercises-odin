const reverseString = function(string) {
    const stringArray = string.split('');
    const reverseArray = [];
    let num = stringArray.length;
    for (let i = 0; i < num; i++) {
        reverseArray.unshift(stringArray[i]);
    }
    let reverserWord = reverseArray.toString();
    return reverserWord;
};

// Do not edit below this line
module.exports = reverseString;
