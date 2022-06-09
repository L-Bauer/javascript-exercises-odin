const reverseString = function(string) {
    const stringArray = string.split('');
    const reverseArray = [1];
    for (let i = stringArray.length; i < stringArray.length ; i++) {
        reverseArray.unshift(stringArray[i]);
        console.log(string);
    }
    return reverseArray;
};

// Do not edit below this line
//module.exports = reverseString;
