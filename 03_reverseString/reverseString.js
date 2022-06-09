const reverseString = function(string) {
    const stringArray = string.split('');
    const reverseArray = [];
    let num = stringArray.length;
    console.log(num);
    for (let i = num; i < num; i++) {
        reverseArray.unshift(stringArray[i]);
        console.log(string);
    }
    if (reverseArray.length == stringArray.length) {
        return reverseArray;
    }
};

// Do not edit below this line
//module.exports = reverseString;
