const reverseString = function(string) {
    const stringArray = string.split('');
    const reverseArray = [];
    let num = stringArray.length;
    for (let i = 0; i < num; i++) {
        reverseArray.unshift(stringArray[i]);
        console.log(string);
    }
};

// Do not edit below this line
//module.exports = reverseString;
