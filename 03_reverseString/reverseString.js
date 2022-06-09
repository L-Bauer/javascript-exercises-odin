const reverseString = function(string) {
    const stringArray = string.split('');
    const reverseArray = [];
    for (let i = stringArray.length; i < stringArray.length ; i++) {
        reverseArray.unshift(string[i]);
    }
    return reverseArray;
};

// Do not edit below this line
module.exports = reverseString;
